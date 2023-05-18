

import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import Image  from 'next/image';

const classes = {
  root: {
    flexGrow: 1
  },
  paper: {
    height: 10,
    padding: 20,
    textAlign: "center",
    color: "#000000"
  }
};

function InnerGrid() {
  return (
    <>
      <Grid item xs={2}>
      <Button variant="outlined">
      </Button>
        <Paper style={classes.paper}>Electricity</Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper style={classes.paper}>Airtime</Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper style={classes.paper}>Cable TV</Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper style={classes.paper}>Internet</Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper style={classes.paper}>Education</Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper style={classes.paper}>Betting</Paper>
      </Grid>
    </>
  );
}
export default function Body() {
  return (
    <div style={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} sm={6} spacing={3}>
          <InnerGrid />
        </Grid>
        <Grid xs={12} sm={6}>
            <Image src="/images/landing img 1.png" height={828} width={562} left={787} top={124} alt="logo"/>
              </Grid>
      </Grid>
    </div>
  );
}

