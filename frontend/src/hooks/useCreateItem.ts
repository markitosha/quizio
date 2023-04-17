import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

import { fetchFromApi } from '../utils/fetchFromApi';

import { RequestKeys } from '../pages/request_hooks/RequestKeys';

export const useCreateItem = <T>(
  queryKey: RequestKeys,
  path: string,
  values: Partial<T> = {},
  invalidate?: RequestKeys,
) => {
  const queryClient = useQueryClient();
  const [submitted, setSubmitted] = useState(false);

  const query = useQuery<T>({
    queryKey: [queryKey],
    queryFn: () =>
      fetchFromApi({
        path: path,
        method: 'post',
        body: values,
      }),
    enabled: submitted,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [invalidate],
      });
      setSubmitted(false);
    },
  });

  const handleCreate = () => {
    setSubmitted(true);
  };

  return { query, handleCreate };
};
