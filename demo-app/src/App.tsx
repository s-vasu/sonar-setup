import React from 'react';
import './App.css';
import { Box, Button, Typography } from '@mui/material';
import DividerLine from './components/atoms/DividerLine';
import ButtonComp from './components/atoms/ButtonComp';

function App() {
  return (
    <div className="App">
      <Box>
        <Typography>
          hi
        </Typography>
        <Button>text Button</Button>

        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
        <DividerLine />
        <ButtonComp text='new button' />
      </Box>
    </div>
  );
}

export default App;
