import { Box, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';

export const CreateQuizButton = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'end',
      }}
    >
      <Button variant={'contained'} onClick={() => navigate('new')}>
        Create quiz
      </Button>
    </Box>
  );
};
