import React, { useEffect } from 'react';

import { RequestedData } from '../components/RequestedData';
import { useNavigateWhenCreated } from './hooks/useNavigateWhenCreated';
import { useCreateQuiz } from './request_hooks/quiz.query';

export const NewQuizPage = () => {
  const { query, handleCreate } = useCreateQuiz();

  useNavigateWhenCreated(query);

  useEffect(() => {
    handleCreate();
  }, [handleCreate]);

  return <RequestedData query={query} />;
};
