import { UseQueryResult } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { QuizType } from '../request_hooks/quiz.query';

export const useNavigateWhenCreated = (
  createQuiz: UseQueryResult<QuizType>,
) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (createQuiz.isLoading) {
      return;
    }

    if (!createQuiz.isError) {
      navigate(`/quizes/${createQuiz.data.id}`);
    }
  }, [createQuiz.isLoading, createQuiz.data, createQuiz.isError, navigate]);
};
