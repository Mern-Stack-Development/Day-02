import React from 'react';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Checkbox from '@mui/material/Checkbox';
import HomeIcon from '@mui/icons-material/Home';
import GamepadIcon from '@mui/icons-material/Gamepad';

function MyButton() {
  return (
    <div>
      <div>
        <HomeIcon fontSize='large'/>
        <HomeIcon fontSize='small'/>
        <Button variant="contained" color="primary">
          <GamepadIcon/>
          Click Me
        </Button>
        <div>
          <Stack direction="row" spacing={5}>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
         </Stack>
         </div>
         <div>
         <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
         </div>
         
         <div>
          <Button variant="contained" 
          style={{ backgroundColor: 'green', 
          width: '200px', color: '#fff' }}>
            Custom Color
          </Button>
         </div>
         
      </div>
      
    </div>
  );
}

export default MyButton;




// import ButtonGroup from '@mui/material/ButtonGroup';
// import HomeIcon from '@mui/icons-material/Home';
// import CarRentalIcon from '@mui/icons-material/CarRental';



//       <div>
//         <Stack direction="row" spacing={5}>
//           <Button variant="outlined">Primary</Button>
//           <Button variant="outlined" disabled>
//             Disabled 
//           </Button> <HomeIcon/>
//           <Button variant="outlined" href="#outlined-buttons">
//             Link
//           </Button>
//         </Stack>
//         <ButtonGroup variant="contained" aria-label="outlined primary button group">
//           <Button>One</Button>
//           <Button>Two</Button>
//           <Button>Three</Button>
//         </ButtonGroup>
//         <Button variant="contained" style={{ backgroundColor: 'red', width: '200px', color: '#fff' }}>
//           Custom Color
//         </Button>
//       </div>