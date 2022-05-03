import { useQuery, gql } from '@apollo/client';

const GET_CHARACTER = gql`
query GetCharacter($id: ID!){
  character(id: $id) {
    name
    id
    image
    episode {
        name
        episode
    }
  }
}
`
const GET_CHARACTERS = gql`
query {
  characters {
    results {
      id
      name
      image
    }
  }
}
`

const LC_RANKING2 = gql`
    query userContestRankingInfo($username: String!) {
  userContestRanking(username: $username) {
    attendedContestsCount
    rating
    globalRanking
    totalParticipants
    topPercentage
    badge {
      name
    }
  }
  userContestRankingHistory(username: $username) {
    attended
    trendDirection
    problemsSolved
    totalProblems
    finishTimeInSeconds
    rating
    ranking
    contest {
      title
      startTime
    }
  }
}
`


const LC_RANKING = gql`
    query userProblemsSolved($username: String!) {
  allQuestionsCount {
    difficulty
    count
  }
  matchedUser(username: $username) {
    problemsSolvedBeatsStats {
      difficulty
      percentage
    }
    submitStatsGlobal {
      acSubmissionNum {
        difficulty
        count
      }
    }
  }
}
`

export const useCharacter = (username) => {
//     const {error, loading, data} = useQuery(
//         GET_CHARACTER, {
//             variables: {
//                 id
//             }
//         }
//       )

    // const {error, loading, data} = useQuery(
    //     GET_CHARACTERS
    //   )

    // const {error, loading, data} = useQuery(
    //     LC, {
    //         variables: {
    //             username
    //         }
    //     }
    //   )

    const {error, loading, data} = useQuery(
        LC_RANKING2, {
            variables: {
                username
            }
        }
      )
    console.log(error)
      return {error, loading, data}
    
}