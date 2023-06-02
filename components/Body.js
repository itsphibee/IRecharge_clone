import React, { Component } from 'react';
import { styled, Box, Paper, Grid, Container, TextField, Avatar, createTheme, ThemeProvider, Typography, Button} from '@mui/material';
import Image  from 'next/image';
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

  const theme = createTheme({
    palette: {
      primary: {
        
        main: '#D34829',
      },
      secondary: {

        main: '#000000',
      },
    },
  });
  
 
  const classes = {
    root: {
      flexGrow: 1
    },
    
  };

 
  
  function InnerGrid() {
    return (
      <>
        <Grid item xs={4} sm={2} >
          <box>
            <LinkButton href="/Electricity" sx={{bgcolor:"#EF5036", width: 65.21, height: 69.25}}> 
        <Avatar alt="Remy Sharp" variant="square" src="/images/Group.png" /></LinkButton>
            <Typography>Electricity</Typography>
          </box>
        </Grid>
        <Grid item xs={4} sm={2}>
        <box>
        <LinkButton href="/Airtime" sx={{bgcolor:"#35892C", width: 65.21, height: 69.25}}> 
        <Avatar alt="Remy Sharp" variant="square" src="/images/Vector (3).png" /></LinkButton>
            <Typography>Airtime</Typography>
          </box>
        </Grid>
        <Grid item xs={4} sm={2}>
        <box>
        <LinkButton href="/CableTV"  sx={{bgcolor:"#727376", width: 65.21, height: 69.25}}> 
        <Avatar alt="Remy Sharp" variant="square" src="/images/Group (1).png" /></LinkButton>
            <Typography>Cable TV</Typography>
          </box>
        </Grid>
        <Grid item xs={4} sm={2}>
        <box>
        <LinkButton href="/Internet" sx={{bgcolor:"#EF5036", width: 65.21, height: 69.25}}> 
        <Avatar alt="Remy Sharp" variant="square" src="/images/Vector (4).png" /></LinkButton>
            <Typography>Internet</Typography>
          </box>
        </Grid>
        <Grid item xs={4} sm={2}>
        <box>
        <LinkButton href="/Education" sx={{bgcolor:"#12865C", width: 65.21, height: 69.25}}> 
        <Avatar alt="Remy Sharp" variant="square" src="/images/Vector (5).png" /></LinkButton>
            <Typography>Education</Typography>
          </box>
        </Grid>
        <Grid item xs={4} sm={2}>
        <box>
        <LinkButton href="/Betting" sx={{bgcolor:"#326BC0", width: 65.21, height: 69.25}}> 
        <Avatar alt="Remy Sharp" variant="square" src="/images/Vector (6).png" /></LinkButton>
            <Typography>Betting</Typography>
          </box>
        </Grid>

      </>
    );
  }

export default function Body() {
    return (
      <div style={classes.root}>
        <Grid container spacing={1} padding={10} >
        
          <Grid container item xs={12} sm={6} left={64} spacing={3}>
            <Container fixed sx={{ align:"center", display:"flex"}}>
            <Typography variant="h5" sx={{size:26, width:500, top:150, weight:700, left:69, font:'poppins', position:'absolute'}}>Welcome, what are you <Typography color="#D34829"variant="h5" sx={{size:26, width:500, left:330, top:150, weight:700, font:'poppins', position:'absolute'}}>purchasing today?</Typography></Typography>
            </Container>
            <InnerGrid />
            
            <TextField fullWidth  label="Search for a service" id="fullWidth" >
              <SearchIcon />
              </TextField>
            
             
            <Container>
            <Button variant="contained"  sx={{ width:90, height:40, top:25, left:590, bgcolor:'#28AA63' }}><Typography variant="h6">NEW</Typography></Button>
            <Box width={700} padding={5} height={325} borderRadius={5} border={1} borderColor="#D34829"> 
            

            <Typography variant="h5" sx={{size:19, width:503, top:493, weight:600, left:92, font:'Montserrat'}}>Your Electricity Meter and Cable TV Decoder now have their own Unique Bank Account Numbers</Typography>
            <Typography sx={{size:14, width:507, top:542, weight:400, left:92, font:'Poppins'}}>Simply make a bank transfer to the account to buy tokens or renew your cable subscription instantly</Typography>
            

            <Grid container spacing={4} padding={2}>
            <Grid item xs="auto">
          <Box bgcolor="#ffffff">
             <Avatar alt="Remy Sharp" variant="square" src="/images/Group 18872.png" />
            <Typography top={3}>No Convenience fee</Typography>
          </Box>
        </Grid>
        <Grid item xs="auto">
        <Box bgcolor="#ffffff">
        <Avatar alt="Remy Sharp" variant="square" src="/images/Vector (7).png" />
            <Typography width={100}>60 seconds turnaround time</Typography>
          </Box>
        </Grid>
        <Grid item xs="auto">
        <Box> 
        <Avatar alt="Remy Sharp" variant="square" src="/images/Group (2).png" />
            <Typography>No Card Exposure</Typography>
          </Box>
        </Grid>
        <Grid item xs="auto">
        <Box>
        <Avatar alt="Remy Sharp" variant="square" src="/images/Group 18882.png" />
            <Typography width={125}>No App. No website Just one bank transfer</Typography>
          </Box>
        </Grid>
        </Grid>
        <ThemeProvider theme={theme}>
        <Button href="/CreateAccount" variant="contained" color="primary"  sx={{ width:228, height:50, left:20 }}>Create Account</Button>
        </ThemeProvider>
          </Box>
          <Container display="flex" padding={15} top={20}>
          <Image src="/images/Group (3).png" height={37.62} padding={10} width={46} />
          <Image src="/images/pngwing 1.png" height={40} width={56} pading={20}/>
          <Image src="/images/Group (4).png" height={30} width={66} padding={10} />
          </Container>
          </Container>

        </Grid>


          <Grid xs={12} sm={6}>
            <Container>
          
              <Image src="/images/landing img 1.png" height={828} position="absolute" z-index={2} width={562} left={787} top={124} alt="logo"/>
              <Image src="/images/download-01-01 1.png" height={58} width={386} position="absolute" z-index={1} left={4000} top={500} />
              </Container>
                </Grid>
        </Grid>
      </div>
    );
  }