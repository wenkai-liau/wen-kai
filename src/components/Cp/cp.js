import {   FormControl, FormHelperText, Grid,  InputLabel,  makeStyles, MenuItem, Select, Tabs, Tooltip  } from '@material-ui/core';
import React, { useEffect, useState } from 'react';


const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    margin: '2% 1%',
    backgroundColor: 'grey'
  },
  imgContainer: {
    display: 'flex',
    height: 400,
    justifyContent: 'center'
  },
}));

const CP = (props) => {
  const classes = useStyles();

    return (
        <Grid item container className={classes.container}>

<Tabs>
    
</Tabs>
        </Grid>
    )
}

export default CP;
