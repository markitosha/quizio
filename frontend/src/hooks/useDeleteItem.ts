import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

import { fetchFromApi } from '../utils/fetchFromApi';

import { RequestKeys } from '../pages/request_hooks/RequestKeys';

export const useDeleteItem = <T>(
  queryKey: RequestKeys,
  path: string,
  invalidate: RequestKeys,
) => {
  const queryClient = useQueryClient();
  const [deleteId, setDeleteId] = useState<string | number>(-1);

  const query = useQuery<T>({
    queryKey: [queryKey, deleteId],
    queryFn: ({ queryKey: [, deleteId] }) =>
      fetchFromApi({ path: `${path}/${deleteId}`, method: 'delete' }),
    enabled: deleteId !== -1,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [invalidate],
      });
      setDeleteId(-1);
    },
  });

  return {
    setDeleteId,
    deleteId,
    query,
  };
};
