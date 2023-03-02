import { CircularProgress } from '@mui/material';
import React from 'react';

import { useCreateQuiz } from './hooks/useCreateQuiz';

export const NewQuizPage = () => {
  const createQuiz = useCreateQuiz();

  if (createQuiz.isLoading) {
    return <CircularProgress />;
  }

  if (createQuiz.isError) {
    return <div>Error</div>;
  }

  return <div />;
};
