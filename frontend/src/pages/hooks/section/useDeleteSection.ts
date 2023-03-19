import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router';

import { fetchFromApi } from '../../../utils/fetchFromApi';

export const useDeleteSection = () => {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const [deleteId, setDeleteId] = useState(-1);

  useQuery({
    queryKey: ['delete_quiz', deleteId],
    queryFn: ({ queryKey: [, deleteId] }) =>
      fetchFromApi({
        path: `quizes/${id}/sections/${deleteId}`,
        method: 'delete',
      }),
    enabled: deleteId !== -1,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['get_sections'] });
      setDeleteId(-1);
    },
  });

  const handleDelete = (id: number) => setDeleteId(id);

  return {
    handleDelete,
  };
};
