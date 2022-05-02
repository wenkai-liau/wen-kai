import { Grid, makeStyles, Select, Tab, Tabs, Typography, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Clock from 'react-live-clock';
import moment from 'moment';
import useWindowDimensions from '../hooks/useWindowDimensions';

const useStyles = makeStyles(theme => ({
  container: {
    height: '5%',
    width: '100%',
    display: 'flex',
  },
  tabStyles: {
    fontWeight: 30,
    fontFamily: '" "Courier New", monospace',
    '&:hover': {
        color: '#213ED2',
        textShadow: '-.25px -.25px 0 black,  .25px .25px black;'
      }
  },
  clockContainer: {
    width: '30%',
  },
  clockStyle:{
    display: 'flex', 
    alignItems: 'center', 
    fontSize: 12,
    height: '50%',
    [theme.breakpoints.down('xs')]: {
      margin: '0% 5%',
      fontSize: 14
    },
    [theme.breakpoints.up('sm')]: {
      margin: '0% 5%',
      fontSize: 22,
      width: 130
    },
  }
}));

const HeaderBar = (props) => {
  const classes = useStyles();
  const {tabValue, handleTabChange} = props

  const allTimezones = moment.tz.names()
  let someTimezones = ['Africa/Abidjan', 'Europe/Berlin', 'Europe/Zurich', 'Asia/Tel_Aviv', 'Japan', 'America/Vancouver', 'Turkey', 'Europe/Moscow', 'Europe/Paris', 'Asia/Singapore']
  someTimezones.sort()

  const [timezoneOne, setTimezoneOne] = useState(moment.tz.guess());
  const [timezoneTwo, setTimezoneTwo] = useState('Africa/Abidjan');

  const createText = (text) => {
    return <Typography variant="caption">
      {text}
    </Typography>
  }

  const handleChangeOne = (event) => {
    setTimezoneOne(event.target.value);
  };

  const handleChangeTwo = (event) => {
    setTimezoneTwo(event.target.value);
  };

  const {height, width} = useWindowDimensions()

  return (
    <Grid container justify="space-between" align="center" className={classes.container}>

        <Grid item container className={classes.clockContainer}>
          <Grid item container style={{ alignItems: 'center'}}>
            <Clock item
              format={'h:mm:ss A'}
              ticking={true}
              timezone={timezoneOne} 
              className={classes.clockStyle}/>
            <FormControl>
              <Select item
                      labelId="tz-one-label"
                      id="tz-one"
                      value={timezoneOne}
                      label="TZ"
                      onChange={handleChangeOne}
              >
                {allTimezones.map(tz => <MenuItem value={tz}>{tz}</MenuItem>)}
              </Select>
            </FormControl>
          </Grid>

          {
            width > 1000 &&
            (
              <Grid item container style={{ alignItems: 'center'}}>
              <Clock item
                format={'h:mm:ss A'}
                ticking={true}
                timezone={timezoneTwo} 
                className={classes.clockStyle}/>
              <FormControl>
                <Select item
                        labelId="tz-two-label"
                        id="tz-two"
                        value={timezoneTwo}
                        label="TZ"
                        onChange={handleChangeTwo}
                >
                  {someTimezones.map(tz => <MenuItem value={tz}>{tz}</MenuItem>)}
                </Select>
              </FormControl>
            </Grid>
            )
          }
        </Grid>

        <Grid item container style={{justifyContent: 'flex-end', width: '70%'}}>
            <Tabs item onChange={handleTabChange} value={tabValue} textColor="primary" indicatorColor="primary">
                <Tab component={Link} to="/" className={classes.tabStyles} value={0} label={createText('About')} />
                <Tab component={Link} to="/cp" className={classes.tabStyles} value={1} label={createText("CP")}/>
                <Tab component={Link} to="/books" className={classes.tabStyles} value={2} label={createText("Books")}/>
                <Tab component={Link} to="/contact" className={classes.tabStyles} value={3} label={createText("Contact")}/>
            </Tabs>
        </Grid>
        
    </Grid>
  );
}

export default HeaderBar;
