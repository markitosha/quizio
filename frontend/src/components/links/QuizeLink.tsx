import { Link } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';

type Props = {
  id?: string;
};

export const QuizeLink: React.FC<Props> = ({ id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/quizes/${id}`);
  };

  return (
    <Link underline="hover" color="inherit" onClick={handleClick}>
      Quiz {id}
    </Link>
  );
};
