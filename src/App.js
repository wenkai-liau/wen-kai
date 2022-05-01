import { createTheme, Grid, makeStyles, ThemeProvider, responsiveFontSizes } from '@material-ui/core';
import HeaderBar from './components/header';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/about';
import FooterBar from './components/footerBar';
import Books from './components/books';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    width: '99vw'
  },
  contentContainer: {
    // height: '95%',
  }
}));

const App = () =>  {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (e, newValue) => {
    setTabValue(newValue);
  };

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <BrowserRouter basename="/wenkai-liau">
      <div className={classes.root}>
        
        <ThemeProvider theme={theme}>
          <HeaderBar handleTabChange={handleTabChange} tabValue={tabValue}/>

          <Grid className={classes.contentContainer}>
            <Routes>
              <Route exact path={''} element={<About/>} />
              <Route exact path={'/cp'} element={<div>Tab 2</div>} />
              <Route exact path={'/books'} element={<Books/>} />
              <Route exact path={'/contact'} element={<div>Tab 4</div>} />
            </Routes>
          </Grid>

          <FooterBar/>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
