import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'; //remind to import this
import HomeIcon from '@mui/icons-material/Home';
import TrafficIcon from '@mui/icons-material/Traffic';
import Logo from '../Styles/images/download.jpg';


function MyButton() {
  return (
    <div>
    <div>
      <HomeIcon/>
      <TrafficIcon/>
      <Button variant="contained" color="primary">
      Click Me
    </Button>
    </div>
    <div>
    <img src={Logo} width="500px" height="500px" alt="logo" />
    {/* <Button variant="contained" style={{ backgroundColor: 'black', width: '100px', color: '#fff' }}>
        Custom Color
      </Button> */}
      {/* <Stack direction="row" spacing={5}>
      <Button variant="contained">Button 1</Button>
      <Button variant="contained">Button 2</Button>
      <Button variant="contained">Button 3</Button>
    </Stack> */}
    </div>
    </div>
  );
}

export default MyButton;
