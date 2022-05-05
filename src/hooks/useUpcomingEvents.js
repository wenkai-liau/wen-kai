import axios from 'axios';
import _ from 'lodash';
import { useState, useEffect } from 'react';

const useUpcomingEvents = () => {

const [leetcodeData, setLeetcodeData] = useState([]);
const [atcoderData, setAtcoderData] = useState([]);
const [codeforcesData, setCodeforcesData] = useState([]);

useEffect(() => {
    axios.get(`https://kontests.net/api/v1/codeforces`)
      .then(res => {
        setCodeforcesData(res.data)
      })
      axios.get(`https://kontests.net/api/v1/at_coder`)
      .then(res => {
        setAtcoderData(res.data)
      })
      axios.get(`https://kontests.net/api/v1/leet_code`)
      .then(res => {
        setLeetcodeData(res.data)
      })

  }, []);

  const allData = [...leetcodeData, ...atcoderData, ...codeforcesData]
  return allData
}

export default useUpcomingEvents