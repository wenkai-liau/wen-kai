import {
    Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Tooltip,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Calendar.css";
import _ from "lodash";
import useAtcoder from "../../hooks/useAtcoder";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    height: "100%",
    margin: "2% 1%",
  },
  itemContainer: {
    justifyContent: "center",
    height: 300,
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
        margin: 20,
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
  },
  cardContainer: {
    margin: "10px 0px",
  },
}));

const AtcoderPage = (props) => {
  const classes = useStyles();

    const data = useAtcoder()
  return (
    <Grid item container className={classes.container}>

    </Grid>
  );
};

export default AtcoderPage;
