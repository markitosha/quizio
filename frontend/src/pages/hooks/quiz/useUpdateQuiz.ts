import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';

import { fetchFromApi } from '../../../utils/fetchFromApi';

export const useUpdateQuiz = (methods: UseFormReturn, id?: string) => {
  const queryClient = useQueryClient();

  const [submitted, setSubmitted] = useState(false);
  const getQuiz = useQuery({
    queryKey: ['get_quiz', id],
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
    queryKey: ['patch_quiz', id],
    queryFn: () =>
      fetchFromApi({
        path: `quizes/${id}`,
        method: 'PATCH',
        body: methods.getValues(),
      }),
    enabled: submitted,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get_quiz', id],
      });
      setSubmitted(false);
    },
  });

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleCancel = () => {
    methods.setValue('name', getQuiz.data.name);
  };

  return {
    getQuiz,
    handleSubmit,
    handleCancel,
  };
};
