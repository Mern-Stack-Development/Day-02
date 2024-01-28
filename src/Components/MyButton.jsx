import React from 'react';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import HomeIcon from '@mui/icons-material/Home';
import CarRentalIcon from '@mui/icons-material/CarRental';

function MyButton() {
  return (
    <div>
      <div>
        <HomeIcon fontSize='large'/>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
        <CarRentalIcon/>
      </div>
      <div>
        <Stack direction="row" spacing={5}>
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </div>
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
        <Button variant="contained" style={{ backgroundColor: 'red', width: '200px', color: '#fff' }}>
          Custom Color
        </Button>
      </div>
    </div>
  );
}

export default MyButton;
