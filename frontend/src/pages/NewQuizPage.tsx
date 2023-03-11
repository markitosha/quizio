import React from 'react';

import { RequestedData } from '../components/RequestedData';
import { useCreateQuiz } from './hooks/useCreateQuiz';

export const NewQuizPage = () => {
  const createQuiz = useCreateQuiz();

  return <RequestedData query={createQuiz} />;
};
