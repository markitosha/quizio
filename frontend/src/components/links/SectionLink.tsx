import { Link } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';

type Props = {
  quizId?: string;
  id?: string;
};

export const SectionLink: React.FC<Props> = ({ id, quizId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/quizes/${quizId}/sections/${id}`);
  };

  return (
    <Link underline="hover" color="inherit" onClick={handleClick}>
      Section {id}
    </Link>
  );
};
