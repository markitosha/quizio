import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { fetchFromApi } from '../../utils/fetchFromApi';

export const useCreateQuiz = () => {
  const navigate = useNavigate();
  const createQuiz = useQuery({
    queryKey: ['createQuiz'],
    queryFn: () =>
      fetchFromApi({
        path: 'quizes',
        method: 'post',
      }),
  });

  useEffect(() => {
    if (createQuiz.isLoading) {
      return;
    }

    if (!createQuiz.isError) {
      navigate(`/quizes/${createQuiz.data.id}`);
    }
  }, [createQuiz.isLoading, createQuiz.data, createQuiz.isError, navigate]);

  return createQuiz;
};
