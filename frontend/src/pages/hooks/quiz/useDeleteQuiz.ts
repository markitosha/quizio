import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

import { fetchFromApi } from '../../../utils/fetchFromApi';

export const useDeleteQuiz = () => {
  const queryClient = useQueryClient();
  const [deleteId, setDeleteId] = useState(-1);

  useQuery({
    queryKey: ['delete_quiz', deleteId],
    queryFn: ({ queryKey: [, deleteId] }) =>
      fetchFromApi({ path: `quizes/${deleteId}`, method: 'delete' }),
    enabled: deleteId !== -1,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['get_quizes'] });
      setDeleteId(-1);
    },
  });

  return {
    setDeleteId,
    deleteId,
  };
};
