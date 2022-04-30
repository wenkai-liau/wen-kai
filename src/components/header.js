import { Grid, makeStyles, Tab, Tabs, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  container: {
    height: '5%',
    width: '100%',
    // backgroundColor: 'red',
    display: 'flex',
  },
  nameContainer: {
    width: '50%', 
    height: '100%', 
    // backgroundColor: 'blue', 
    fontFamily: '" "Courier New", monospace'
  },
  tabStyles: {
    fontWeight: 30,
    fontFamily: '" "Courier New", monospace'
  }
}));

const HeaderBar = (props) => {
  const classes = useStyles();
  const {tabValue, handleTabChange} = props

  return (
    <div container className={classes.container}>
        <Typography item variant="h3" className={classes.nameContainer}>
            {/* Wen Kai */}
        </Typography>

        <Grid item container style={{width: '50%', justifyContent: 'center', alignItems: 'center'}}>
            <Tabs onChange={handleTabChange} value={tabValue} textColor="primary" indicatorColor="primary">
                <Tab component={Link} to="/about" className={classes.tabStyles} value={0} label="About" />
                <Tab component={Link} to="/cp" className={classes.tabStyles} value={1} label="CP"/>
                <Tab component={Link} to="/books" className={classes.tabStyles} value={2} label="Books"/>
                <Tab component={Link} to="/contact" className={classes.tabStyles} value={3} label="Contact"/>
            </Tabs>
        </Grid>
        
    </div>
  );
}

export default HeaderBar;
