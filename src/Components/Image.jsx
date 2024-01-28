import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'; //remind to import this
import HomeIcon from '@mui/icons-material/Home';
import TrafficIcon from '@mui/icons-material/Traffic';
import Image1 from '../Styles/images/download.jpg';


function MyImage() {
  return (
    <div>
    <div>
    <img src={Image1} width="50px" height="50px" alt="logo" />

    </div>
    </div>
  );
}

export default MyImage;
