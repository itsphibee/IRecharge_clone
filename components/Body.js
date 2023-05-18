import React, { Component } from 'react';
import { styled, Box, Paper, Grid, Container, TextField, createTheme, Typography, Button} from '@mui/material';
import Image  from 'next/image';
import {blue} from '@mui/material/colors';
import {orange} from '@mui/material/colors';
import '@fontsource/poppins/700.css';
import SearchIcon from '@mui/icons-material/Search';




const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const LinkButton = styled(Button)({
    '&:hover': {
        backgroundColor: '#2596be',
      },
      '&:active': {
        backgroundColor: '#EF5036',
      
  }});

  
  
 /*  const Container = styled(Box)`
  padding: 60px;
  display: flex;
  width: 568px;
  left: 69px;
  Typography {
    font: Poppins;
    Weight: 600;
    size: 56px;
    line-height: 39px;
    color: #ffffff;
    padding: 10px;
}
` 
 */
  const classes = {
    root: {
      flexGrow: 1
    },
    
  };
  
  function InnerGrid() {
    return (
      <>
        <Grid item xs={4} sm={2}>
          <box>
            <LinkButton href="/Electricity" variant="contained" sx={{color:"#EF5036", height:60, width:60 }}></LinkButton>
            <Typography>Electricity</Typography>
          </box>
        </Grid>
        <Grid item xs={4} sm={2}>
        <box>
        <LinkButton href="/Airtime" variant="contained" sx={{color:"ffffff", height:60, width:60 }}></LinkButton>
            <Typography>Airtime</Typography>
          </box>
        </Grid>
        <Grid item xs={4} sm={2}>
        <box>
        <LinkButton href="/CableTV" variant="contained" sx={{color:orange, height:60, width:60 }}></LinkButton>
            <Typography>Cable TV</Typography>
          </box>
        </Grid>
        <Grid item xs={4} sm={2}>
        <box>
        <LinkButton href="/Internet" variant="contained" sx={{color:orange, height:60, width:60 }}></LinkButton>
            <Typography>Internet</Typography>
          </box>
        </Grid>
        <Grid item xs={4} sm={2}>
        <box>
        <LinkButton href="/Education" variant="contained" sx={{color:orange, height:60, width:60 }}></LinkButton>
            <Typography>Education</Typography>
          </box>
        </Grid>
        <Grid item xs={4} sm={2}>
        <box>
        <LinkButton href="/Betting" variant="contained" sx={{color:orange, height:60, width:60 }}></LinkButton>
            <Typography>Betting</Typography>
          </box>
        </Grid>
      </>
    );
  }

export default function Body() {
    return (
      <div style={classes.root}>
        <Grid container spacing={1}>
        
          <Grid container item xs={12} sm={6} spacing={3}>
            <Container fixed sx={{padding:10, align:"center"}}>
            <Typography variant="h5" sx={{size:26, width:568, top:173, weight:700, left:69, font:'poppins', position:'absolute'}}>Welcome, what are you purchasing today?</Typography>
            </Container>
            <InnerGrid />
            
              <SearchIcon />
            <TextField fullWidth  label="Search for a service" id="fullWidth" />
        </Grid>
          <Grid xs={12} sm={6}>
              <Image src="/images/landing img 1.png" height={828} width={562} left={787} top={124} alt="logo"/>
                </Grid>
        </Grid>
      </div>
    );
  }