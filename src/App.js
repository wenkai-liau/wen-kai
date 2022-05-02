import { createTheme, Grid, makeStyles, ThemeProvider, responsiveFontSizes, Typography } from '@material-ui/core';
import HeaderBar from './components/header';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/about';
import FooterBar from './components/footerBar';
import Books from './components/books';
import pikachu from './images/pikachu_meme.png';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    width: '99vw'
  },
  contentContainer: {
    minHeight: '87%',
  }
}));

const App = () =>  {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    const currentPath = window.location.pathname
    const tabString = currentPath.split("/")
    switch (tabString.at(-1)){
      case 'cp':
        setTabValue(1)
        return
      case 'books':
        setTabValue(2)
        return
      case 'contact':
        setTabValue(3)
        return
      default:
        setTabValue(0)
        return
    }
  }, []);

  const handleTabChange = (e, newValue) => {
    setTabValue(newValue);
  };

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const wip = () => {
    return (
      <Grid container justifyContent="center" alignItems="center" style={{flexDirection: 'column', height: '85vh', width: '100%'}}>
        <img item src={pikachu} width={385} height={314} style={{alignSelf: 'center'}}/>
        <Typography item variant="h3">
          Work in Progress
        </Typography>
      </Grid>
    )
  }

  return (
    <BrowserRouter basename="/wenkai-liau">
      <div className={classes.root}>
        
        <ThemeProvider theme={theme}>
          <HeaderBar handleTabChange={handleTabChange} tabValue={tabValue}/>

          <Grid container className={classes.contentContainer}>
            <Routes>
              <Route exact path={''} element={<About/>} />
              <Route exact path={'/cp'} element={wip()} />
              <Route exact path={'/books'} element={<Books/>} />
              <Route exact path={'/contact'} element={wip()} />
            </Routes>
          </Grid>

          <FooterBar/>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
