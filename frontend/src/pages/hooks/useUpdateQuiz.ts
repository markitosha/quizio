import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

import { fetchFromApi } from '../../utils/fetchFromApi';

export const useUpdateQuiz = (methods: ReturnType<typeof useForm>) => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const [submitted, setSubmitted] = useState(false);
  const getQuiz = useQuery({
    queryKey: ['getQuiz', id],
    queryFn: () =>
      fetchFromApi({
        path: `quizes/${id}`,
        method: 'get',
      }),
    onSuccess: (data) => {
      methods.setValue('name', data.name);
    },
  });

  useQuery({
    queryKey: ['patchQuiz', id],
    queryFn: () =>
      fetchFromApi({
        path: `quizes/${id}`,
        method: 'PATCH',
        body: methods.getValues(),
      }),
    enabled: submitted,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['getQuiz', id],
      });
      setSubmitted(false);
    },
  });

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return {
    getQuiz,
    handleSubmit,
  };
};
