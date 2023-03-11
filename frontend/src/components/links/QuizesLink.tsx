import { Link } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';

export const QuizesLink = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/quizes');
  };

  return (
    <Link underline="hover" color="inherit" onClick={handleClick}>
      Quizes
    </Link>
  );
};
