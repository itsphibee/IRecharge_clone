import { styled, Box } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Typography, Appbar } from '@mui/material';
import {white} from '@mui/material/colors';

  const HeaderBox = styled(Box)`
    background: #D34829;
    display: flex;
    Height: 40px;
    position: static;
    top: 0px;

 content {
    align: right;
    display: flex;
    color: white;
    top:20px;
    bottom: 20px;
 }
`  

const Header = () => {
    return (
        <HeaderBox>
            <content>
             <Typography>Lost Your Token?</Typography>
             
    
             <TwitterIcon fontSize="medium"/>
             <FacebookIcon fontSize="medium"/>
             <InstagramIcon fontSize="medium"/>
        </content>
        </HeaderBox>
    )
}

export default Header;