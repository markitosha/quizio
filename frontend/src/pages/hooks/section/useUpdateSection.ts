import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

import { fetchFromApi } from '../../../utils/fetchFromApi';

export const useUpdateSection = (updateId: number) => {
  const methods = useForm();
  const { id } = useParams();
  const [submitted, setSubmitted] = useState(false);
  const queryClient = useQueryClient();

  const currentName = methods.watch('name');

  const handleCancel = () => {
    methods.reset();
  };

  useQuery({
    queryKey: ['patch_section', updateId],
    queryFn: () =>
      fetchFromApi({
        path: `quizes/${id}/sections/${updateId}`,
        method: 'PATCH',
        body: methods.getValues(),
      }),
    enabled: submitted,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get_sections', id],
      });
      setSubmitted(false);
    },
  });

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return {
    methods,
    currentName,
    handleCancel,
    handleSubmit,
  };
};
