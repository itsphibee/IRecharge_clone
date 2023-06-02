import { styled, Box, Grid, Paper, Table } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Typography, Appbar } from '@mui/material';

const Head = styled(Box)`
    display: flex;
    gap: 16px;
    margin-right: auto;
    align: center; 
`

const Header = () => {
    return (
        
<Head sx={{ color: "#ffffff", background: "#D34829", height:20, position:"relative", padding:2 }}>
  
          
            <div sx={{width:50, right:190}}><Typography>Lost Your Token?</Typography></div>
            <div> <TwitterIcon fontSize="medium"/> </div>
            <div> <FacebookIcon fontSize="medium"/></div>
            <div margin-left="auto"> <InstagramIcon fontSize="medium"/></div>
</Head>
    )
}

export default Header; 

