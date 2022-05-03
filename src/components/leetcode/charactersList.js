import { Grid, makeStyles, Select, Tab, Tabs, Typography, MenuItem, FormControl, InputLabel, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { ApolloClient, ApolloProvider , InMemoryCache } from '@apollo/client'
import { useQuery, gql } from '@apollo/client';
import { useCharacter } from '../../hooks/useCharacter';

const useStyles = makeStyles(theme => ({
  container: {
    height: '5%',
    width: '100%',
    display: 'flex',
  },
}));

const GET_CHARACTERS = gql`
query {
  characters {
    results {
      id
      name
      image
    }
  }
}
`

const CharactersList = (props) => {
  const classes = useStyles();

// const {error, loading, data} = useQuery(
//   GET_CHARACTERS
// )
const {error, loading, data} = useCharacter('Lwenkai')

console.log(error)
console.log(loading)
console.log(data)

return (
  <Grid>
  </Grid>
)
}

export default CharactersList;

