import axios from 'axios';
import _ from 'lodash';
import { useState, useEffect } from 'react';

const useUpcomingEvents = () => {

const [lc, setLc] = useState([])
const [ac, setAc] = useState([])
const [cf, setCF] = useState([])

useEffect(() => {
    axios.get(`https://kontests.net/api/v1/codeforces`)
      .then(res => {
        setCF(res.data)
      })
      axios.get(`https://kontests.net/api/v1/at_coder`)
      .then(res => {
        setAc(res.data)
      })
      axios.get(`https://kontests.net/api/v1/leet_code`)
      .then(res => {
        setLc(res.data)
      })
  }, []);

  const getAllFormatData = () => {
    const allData = [...lc, ...ac, ...cf]
    const formatData = _.map(allData, data => {
      return {
        ...data,
        dateObj: new Date(data.start_time),
        type: data.url.includes('leetcode') ? 'LEETCODE' : (data.url.includes('atcoder') ? "ATCODER" : 'CODEFORCES')
      }
    })
    const sortedData = formatData.sort((a, b) => a.dateObj - b.dateObj).filter(data => data.dateObj > new Date())
    return sortedData
  }

  const getFirstEvent = () => {
    const formatData = getAllFormatData()
    if (!_.isUndefined(formatData) && !_.isEmpty(formatData)) {
      return formatData[0].dateObj
    }
  }


  return {formatData: getAllFormatData(), firstEvent: getFirstEvent()}
}

export default useUpcomingEvents