import { Grid,  makeStyles, Typography  } from '@material-ui/core';
import { Build, History, LibraryBooks, Star, Image } from '@material-ui/icons';
import React from 'react';
import _ from 'lodash'

const useStyles = makeStyles(theme => ({
    root: {
        border: '1px solid black',
        borderRadius: 20,
        backgroundColor: 'red',
        [theme.breakpoints.down('xs')]: {
            height: 200,
            width: '100%',
            padding: '3%'
        },
        [theme.breakpoints.up('sm')]: {
            height: 350,
            width: '50%',
            padding: '2%'
        },
        alignItems: 'space-between'
  },
  contentContainer: {
    height: '100%',
    width: '60%',
    backgroundColor: 'green',
    alignItems: 'flex-start'
  },
  imageContainer: {
      width: '40%',
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
  },
  titleStyle: {
      width: '100%',
      height: '25%',
      overflowX: 'auto',
      display: 'flex',
      justifyContent: 'center',
      
      [theme.breakpoints.down('xs')]: {
          fontSize: 20,
          marginBottom: 5,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 25,
            marginBottom: 10,
        },
  },
  commentsStyle:{
    width: '100%',
    height: '15%',
    overflowX: 'auto',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
        fontSize: 15,
        marginBottom: 5
      },
      [theme.breakpoints.up('sm')]: {
          fontSize: 20,
          marginBottom: 10,
      },
  },
  authorStyle:{
      height: '5%',
      [theme.breakpoints.down('xs')]: {
        fontSize: 10
      },
      [theme.breakpoints.up('sm')]: {
          fontSize: 15
      },
  },
  iconStyle:{
      fontSize: 18,
      marginLeft: 3
  },
  starIcon:{
    [theme.breakpoints.down('xs')]: {
        height: 15,
        width: 15
    },
    [theme.breakpoints.up('sm')]: {
        height: 25,
        width: 25
    },
    color: '#FFD700',
  },
  unstarIcon:{
    [theme.breakpoints.down('xs')]: {
        height: 15,
        width: 15
    },
    [theme.breakpoints.up('sm')]: {
        height: 25,
        width: 25
    },
    color: '#808080',
  },
  bottomContainer: {

  }
}));

const BookCard = (props) => {
  const classes = useStyles();
  const {title, author, rating, difficulty, comments, category} = props.bookData
  
  const renderCategoryIcon = (category) => {
    switch (category) {
        case 'Technical':
            return <Build className={classes.iconStyle}/>
        case 'History':
            return <History className={classes.iconStyle}/>
        default:
            return <LibraryBooks className={classes.iconStyle}/>
    }
  }

  const renderRatingAndDificultyContainer = (rating, difficulty) => {
      return (
        <Grid container item>
            <Grid item>
                {[...Array(rating)].map(idx => <Star className={classes.starIcon}/>)}
                {[...Array(5-rating)].map(idx => <Star className={classes.unstarIcon}/>)}
            </Grid>
        </Grid>
      )
  }

  return (
    <Grid container className={classes.root}>
        
        <Grid container className={classes.contentContainer}>
            <Typography item  className={classes.titleStyle}>
                {title}
            </Typography>

            <Typography item  className={classes.commentsStyle} style={{justifyContent: 'flex-start'}}>
                {comments}
            </Typography>

            <Typography item  className={classes.authorStyle}>
                {`Author: ${author}`}
            </Typography>

            <Grid item container alignItems='center'> 
                <Typography item  className={classes.authorStyle}>
                    {`Category: ${category}`}
                </Typography>
                {renderCategoryIcon(category)}
            </Grid>
            {renderRatingAndDificultyContainer(rating, difficulty)}
        </Grid>

        <Grid item container className={classes.imageContainer}>
            <Image style={{height: '80%', width: '80%', color: '#808080'}}/>
        </Grid>
    </Grid>
  );
}

export default BookCard;
