import { Box, Button } from '@mui/material'
import React from 'react'

const ButtonComp = ({ text }: { text:string }) => {
  return (
    <Box>
      <Button>{text}</Button>
    </Box>
  );
};

export default ButtonComp
