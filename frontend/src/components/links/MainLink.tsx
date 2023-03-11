import { Link } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';

export const MainLink = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Link underline="hover" color="inherit" onClick={handleClick}>
      Main
    </Link>
  );
};
