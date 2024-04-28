import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ButtonGroup from '@mui/material/ButtonGroup';
import Checkbox from '@mui/material/Checkbox';
import HomeIcon from '@mui/icons-material/Home';
import GamepadIcon from '@mui/icons-material/Gamepad';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

function MyButton() {
  return (
    <div>
      <HomeIcon fontSize='large'/>
      <HomeIcon fontSize='small'/>
      <AccessibilityIcon/>
      <div>
        <Button variant="contained" color="primary">
          <GamepadIcon/>
          Click Me
        </Button>        
      </div>
      <Stack direction="row" spacing={5}>
      <Button variant="contained">Contained</Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" href="#contained-buttons">
          Link
        </Button>
      </Stack>
      <div>
        <Stack direction="row" spacing={5}>
          <Button variant="outlined">Primary</Button>
          <Button variant="outlined" disabled>
            Disabled 
          </Button> <HomeIcon/>
          <Button variant="outlined" href="#outlined-buttons">
            Link
          </Button>
        </Stack>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>


        <Button variant="contained" style={{ backgroundColor: 'red', width: '200px', color: 'yellow' }}>
          Custom Color
        </Button>
      </div>
      <div>
          <Button variant="contained" 
          style={{ backgroundColor: 'green', 
          width: '200px', color: '#fff', margin: '20px' }}>
            Custom Color
          </Button>
      </div> 
      
    </div>
  );
}

export default MyButton;
















// import ButtonGroup from '@mui/material/ButtonGroup';
// import HomeIcon from '@mui/icons-material/Home';
// import CarRentalIcon from '@mui/icons-material/CarRental';








// import { Stack } from '@mui/material';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import Checkbox from '@mui/material/Checkbox';
// import HomeIcon from '@mui/icons-material/Home';
// import GamepadIcon from '@mui/icons-material/Gamepad';
