import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'; //remind to import this

function MyButton() {
  return (
    <div>
      <Button variant="contained" color="primary">
      Click Me
    </Button>
    {/* <Button variant="contained" style={{ backgroundColor: 'black', width: '100px', color: '#fff' }}>
        Custom Color
      </Button> */}
    </div>
    
  );
}

export default MyButton;
