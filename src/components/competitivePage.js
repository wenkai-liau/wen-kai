import { Grid, makeStyles, Select, Tab, Tabs, Typography, MenuItem, FormControl, InputLabel, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { ApolloClient, ApolloProvider , InMemoryCache } from '@apollo/client'
import { useQuery, gql } from '@apollo/client';
import CharactersList from './leetcode/charactersList';

const useStyles = makeStyles(theme => ({
  container: {
    height: '5%',
    width: '100%',
    display: 'flex',
  },
}));

const client = new ApolloClient({
  // uri: 'https://rickandmortyapi.com/graphql',
  uri: 'https://leetcode.com/graphql/',
  cache: new InMemoryCache(),
  // mode: 'no-cors',
  // credentials: "same-origin",
  // fetchOptions: {
  //   mode: 'no-cors',
  //   },
})


const CompetitivePage = (props) => {
  const classes = useStyles();
console.log('CompetitivePage')
return (
  <Grid>
    <ApolloProvider client={client}>
        <CharactersList/>
    </ApolloProvider>
  </Grid>
)
}

export default CompetitivePage;

