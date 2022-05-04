import axios from 'axios';
import _ from 'lodash';
import { useState, useEffect } from 'react';

const useCodeforces = () => {

const [ratingData, setRatingData] = useState(undefined);
const [submissionsData, setSubmissionsData] = useState(undefined);

const [problemsSolved, setProblemsSolved] = useState(0)
const [standings, setStandings] = useState(0)

const [contestIds, setContestIds] = useState([]) 
// const [contestDetailedData, setContestDetailedData] = useState(undefined)

useEffect(() => {
    axios.get(`https://codeforces.com/api/user.rating?handle=wKai000`)
      .then(res => {
        setRatingData(res.data.result);
        setContestIds(res.data.result.map(contest => contest.contestId))
      })

      axios.get(`https://codeforces.com/api/user.status?handle=wKai000`)
      .then(res => {
          setSubmissionsData(res.data.result)
      })

  }, []);

  const getProblemsSolved = () => {
    // number of questions solved per contest
    const idSolved = {}

    _.forEach(contestIds, id => idSolved[id] = 0)
    
    const categories = {}
    const submissionStatus = {}
    _.forEach(submissionsData, data => {
        const passed = data.verdict === 'OK'
        submissionStatus[data.verdict] = _.defaultTo(submissionStatus[data.verdict], 0) + 1

        if (!passed){
            return
        }

        const cId = data.problem.contestId
        const contestParticipant = data.author.participantType === 'CONTESTANT'
        if (contestParticipant && contestIds.includes(cId)){
            idSolved[cId] += 1
        }

        _.forEach(data.problem.tags, tag => categories[tag] = _.defaultTo(categories[tag], 0) + 1)

    })
    return {idSolved, categories, submissionStatus}    
  }


  const {idSolved, categories, submissionStatus} = getProblemsSolved()
  // console.log(submissionStatus)
  return {ratingData, submissionsData, idSolved, categories, submissionStatus}
}

export default useCodeforces