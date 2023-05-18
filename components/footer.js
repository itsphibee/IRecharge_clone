import { styled, Box, Typography } from '@mui/material';

const FooterBox = styled(Box)`
    background: #ffffff;
    bottom: 0;
    left: 0;
    right: 0;
    Height: 50px;
    position: absolute;

 content {
    display: flex;
    color: #D34829;
    padding: 20px;
    top: 10px;
    
 }
`  

const footer = () => {
    return (
      <FooterBox>
      
        <content>
  
          <Typography color="#D34829" width="82px"height="23px"font-family="Roboto"font-weight="500"font-size="11px">Buy on WhatsApp</Typography>
          <Typography color="#28AA63"width="82px"height="23px"font-family="Roboto"font-weight="500"font-size="11px">09096666612</Typography>
          </content>
      
        </FooterBox>
    )
}

export default footer;