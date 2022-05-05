import { Card, CardContent, CardMedia, Grid, makeStyles, Tab, Tabs, Tooltip, Typography, } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useUpcomingEvents from '../../hooks/useUpcomingEvents';
import moment from 'moment';
import Calendar from 'react-calendar';
import './Calendar.css';
import _ from 'lodash';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    margin: '2% 1%',
  },
  itemContainer: {
    padding: 10,
    [theme.breakpoints.down("xs")]: {
      width: '100%'
    },
    [theme.breakpoints.up("sm")]: {
      width: '50%'
    },
  },
  cardContainer: {
    margin: '10px 0px'
  }
}));

const UpcomingEventPage = (props) => {
  const classes = useStyles();
  const [currentTimezone, setCurrentTimezone] = useState(moment.tz.guess());
  const [selDate, setSelDate] = useState(new Date())
  const currentTime = moment.tz(new Date(), currentTimezone);

  const {formatData, firstEvent} = useUpcomingEvents()
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      for (let i=0; i<formatData.length; i++) {
        const data = formatData[i]
        if (date.getMonth() === data.dateObj.getMonth() && date.getDate() === data.dateObj.getDate()) {
          return data.type
        }
      }
    }
    }

    const tileContent = ({ date, view }) => {
      let count = 0;
      if (view === 'month') {
        for (let i=0; i<formatData.length; i++) {
          const data = formatData[i]
          if (date.getMonth() === data.dateObj.getMonth() && date.getDate() === data.dateObj.getDate()) {
            count += 1
          }
        }
      }
      if (count > 1){
        return <Grid style={{position: 'absolute', top: 2, right:3, fontStyle: 'italic', fontSize: 12}} >{count}</Grid>
      }
      }

      const onChange = (e) => {
        setSelDate(e)
      }
 
      const getSelectedDateEvents = () => {
        let count = 0
        let events = new Set()
        for (let i=0; i<formatData.length; i++) {
          const data = formatData[i]
          if (selDate.getMonth() === data.dateObj.getMonth() && selDate.getDate() === data.dateObj.getDate()) {
            count += 1
            events.add(data.type)
          }
        }
        return {count, events: Array.from(events)}
      }

      const children = ({ remainingTime }) => {
        const hours = Math.floor(remainingTime / 3600)
        const minutes = Math.floor((remainingTime % 3600) / 60)
        const seconds = remainingTime % 60
      
        return `${hours}:${minutes}:${seconds}`
      }

      const getDuration = () => {
        if (!_.isUndefined(firstEvent)) {
        return (firstEvent.getTime() - new Date())/1000
      }
      }

    return (
        <Grid item container className={classes.container}>

          <Grid item className={classes.itemContainer}>
              <Calendar
                onChange={onChange}
                value={currentTime.toDate()}
                tileClassName={tileClassName}
                tileContent={tileContent}
              />
            </Grid>

            <Grid item className={classes.itemContainer}>
              <Card className={classes.cardContainer}>
                <CardContent>

                <Grid container item>

                  <Grid container item style={{width: '60%'}}>
                    <Grid item container alignItems='center'>
                      <Typography item variant="h6" style={{width: '30%'}}>
                          {`Next Event:`}
                      </Typography>
                      <Typography item variant="h6" style={{width: '70%'}}>
                          {`${_.isUndefined(formatData[0]) ? '' : formatData[0].type}`}
                      </Typography>
                    </Grid>

                    <Grid item container alignItems='center'>
                      <Typography item variant="h6" style={{width: '30%'}}>
                          {`Start Time:`}
                      </Typography>
                      <Typography item variant="h6" style={{width: '70%'}}>
                          {`${_.isUndefined(formatData[0]) ? '' : formatData[0].dateObj.toDateString()}`}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container item style={{width: '40%', alignItems: 'center', justifyContent: 'center'}}>
                    <CountdownCircleTimer
                      size={100}
                      isPlaying
                      duration={getDuration()}
                      colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                      colorsTime={[7, 5, 2, 0]}
                    >
                      {({ remainingTime }) => {
                        const hours = Math.floor(remainingTime / 3600)
                        const minutes = Math.floor((remainingTime % 3600) / 60)
                        const seconds = remainingTime % 60

                        return `${hours}:${minutes}:${seconds}`
                      }}
                    </CountdownCircleTimer>
                  </Grid>

                </Grid>

                </CardContent>
              </Card>

              <Card className={classes.cardContainer}>
                <CardContent>

                  <Grid item container alignItems='center'>
                    <Typography item variant="h6" style={{width: '30%'}}>
                        {`Selected Date:`}
                    </Typography>
                    <Typography item variant="h6" style={{width: '70%'}}>
                        {`${_.isUndefined(selDate) ? '' : selDate.toDateString()}`}
                    </Typography>
                  </Grid>

                  <Grid item container alignItems='center'>
                    <Typography item variant="h6" style={{width: '30%'}}>
                        {`Events:`}
                    </Typography>
                    <Typography item variant="h6" style={{width: '70%'}}>
                        {getSelectedDateEvents().events.join(', ')}
                    </Typography>
                  </Grid>

                </CardContent>
              </Card>             
            </Grid>


        </Grid>
    )
}

export default UpcomingEventPage;
