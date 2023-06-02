import { AppBar, Toolbar, Button, styled, Typography, Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const Head = styled(AppBar)`

box-sizing: border-box;
width: flex;
height: 70px;
left: 0%;
right: 0%;
top: 20px;
bottom: 0%;
background: white;
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
`
const Nav = styled(Box)`
    display: flex;
    gap: 6px;
    top: 90px;
    margin-right: auto;
    float: bottom;  
`
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

  const LinkButton = styled(Button)({
    top: '10px',
    bottom: '10px',
    '&:hover': {
        backgroundColor: '#2596be',
        borderColor: '#D34829',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: 'brown',
        borderColor: '#005cbf',
  }});

const NavBar = () => {
       return (
        <Head position='relative'>
            
        <Nav>
            <Image src="/images/logo.png" height={56.31} width={183} left={19} alt="logo"/>
            <Link href='/'><Typography display="center" color="#D34829"width="80px"height="23px"font-family="Roboto"font-weight="500"font-size="30px"> Personal</Typography></Link>
            <Link href='/business'><Typography color="#505050"width="82px"height="23px"font-family="Roboto"font-weight="500"font-size="30px">Business</Typography></Link>
            <Link href='/Commerce'><Typography color="#505050"width="82px"height="23px"font-family="Roboto"font-weight="500"font-size="30px">Commerce</Typography></Link>
            <ThemeProvider theme={theme}>
           <LinkButton href='/Login' variant="outlined" color="primary" sx={{width:141, height:35, left:169, radius:3, gap:10 }}> Login </LinkButton>
           <LinkButton href='SignUp' variant="contained" color="primary" sx={{width:141, height:35, left:200 }}> Sign Up </LinkButton>  
            </ThemeProvider>
        </Nav>
            
        </Head>
    )
}

export default NavBar;