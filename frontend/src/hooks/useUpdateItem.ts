import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';

import { fetchFromApi } from '../utils/fetchFromApi';

import { RequestKeys } from '../pages/request_hooks/RequestKeys';

export const useUpdateItem = <T>(
  queryKey: [RequestKeys, string],
  values: UseFormReturn,
  path: string,
  invalidate: RequestKeys,
) => {
  const queryClient = useQueryClient();
  const [submitted, setSubmitted] = useState(false);

  const query = useQuery({
    queryKey: queryKey,
    queryFn: () =>
      fetchFromApi({
        path: `${path}/${queryKey[1]}`,
        method: 'PATCH',
        body: values.getValues(),
      }),
    enabled: submitted,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [invalidate, queryKey[1]],
      });
      setSubmitted(false);
    },
  });

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return {
    query,
    handleSubmit,
  };
};
