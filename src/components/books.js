import {   Grid,  makeStyles  } from '@material-ui/core';
import React from 'react';

import book_cover_page from '../images/books.jpg'
import BookCard from './bookCard';
import booksJson from '../books/books.json';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  imgContainer: {
    display: 'flex',
    height: 400,
    justifyContent: 'center'
  },
  contentContainer: {
    padding: '1% 5%',
    // flexDirection: 'column'
  },
  aboutMeContainer: {
      flexDirection: 'column',
      [theme.breakpoints.down('xs')]: {
        marginTop: 15
      },
      [theme.breakpoints.up('sm')]: {
        marginTop: 25
      },
  },
  logoStyle: {
    height: 50,
    width: 50
  },
  subContentContainer: {
    [theme.breakpoints.down('xs')]: {
      marginTop: 100
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: 250
    },
  },
  othersContainer: {
    [theme.breakpoints.down('xs')]: {
      marginTop: 50
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: 100
    },
  }
}));

const Books = (props) => {
  const classes = useStyles();

    const read = booksJson.read
    const reading = booksJson.reading
    const toRead = booksJson.toRead

  return (
    <div container className={classes.container}>
        <Grid item className={classes.imgContainer}>
          <img item src={book_cover_page} width={1400} height={350} style={{alignSelf: 'center'}}/>
        </Grid>

        <Grid item container className={classes.contentContainer}>
            {read.map(book => book !== undefined && <BookCard bookData={book}/>)}
        </Grid>
    </div>
  );
}

export default Books;
