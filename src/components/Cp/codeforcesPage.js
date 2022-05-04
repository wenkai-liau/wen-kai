import { Grid, makeStyles, Tab, Tabs, Tooltip, Typography, } from '@material-ui/core';
import useCodeforces from '../../hooks/useCodeforces';
import CodeforcesRankTable from './codeforcesRankTable';
import _ from 'lodash'

// top left: submission status
// top right: contest getContestDistribution
// bot: categories
const CodeforcesPage = (props) => {
    const {ratingData, submissionsData, idSolved, categories, submissionStatus} = useCodeforces()

    const getContestDistribution = () => {
        const divLevels = {2: 0, 3:0, 4:0}
        _.forEach(ratingData, item => {
            const contestName = item.contestName;
            if (contestName.includes('Div. 2')) {
                divLevels[2] += 1;
            } else if (contestName.includes('Div. 3')) {
                divLevels[3] += 1;
            } else {
                divLevels[4] += 1;
            }
        })
        return divLevels
    }

    return (
        <Grid container item>
            <CodeforcesRankTable ratingData={ratingData} idSolved={idSolved}/>
        </Grid>
    );
  }


export default CodeforcesPage;
