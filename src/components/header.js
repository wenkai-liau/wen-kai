import { Grid, makeStyles, Tab, Tabs, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  container: {
    height: '5%',
    width: '100%',
    display: 'flex',
  },
  nameContainer: {
    width: '50%', 
    height: '100%', 
    fontFamily: '" "Courier New", monospace'
  },
  tabStyles: {
    fontWeight: 30,
    fontFamily: '" "Courier New", monospace',
    '&:hover': {
        color: '#213ED2',
        textShadow: '-.25px -.25px 0 black,  .25px .25px black;'
      }
  },
  height: '100%',
  maxHeight: '100%',
  minWidth: '25%',
  maxWidth: '25%',
  width: '25%'
}));

const HeaderBar = (props) => {
  const classes = useStyles();
  const {tabValue, handleTabChange} = props

  const createText = (text) => {
    return <Typography variant="caption">
      {text}
    </Typography>
  }

  return (
    <Grid container justify="flex-end" align="center" className={classes.container}>

        <Grid item  >
            <Tabs variant="fullWidth" onChange={handleTabChange} value={tabValue} textColor="primary" indicatorColor="primary">
                <Tab component={Link} to="/about" className={classes.tabStyles} value={0} label={createText('About')} />
                <Tab component={Link} to="/cp" className={classes.tabStyles} value={1} label={createText("CP")}/>
                <Tab component={Link} to="/books" className={classes.tabStyles} value={2} label={createText("Books")}/>
                <Tab component={Link} to="/contact" className={classes.tabStyles} value={3} label={createText("Contact")}/>
            </Tabs>
        </Grid>
        
    </Grid>
  );
}

export default HeaderBar;
