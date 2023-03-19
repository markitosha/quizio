import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router';

import { fetchFromApi } from '../../../utils/fetchFromApi';

import { SectionType } from './useGetSections';

export const useCreateSection = (lastIndex: number) => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const [submitted, setSubmitted] = useState(false);
  const createSection = useQuery<SectionType>({
    queryKey: ['create_section', id],
    queryFn: () =>
      fetchFromApi({
        path: `quizes/${id}/sections`,
        method: 'post',
        body: {
          index: lastIndex + 1,
        },
      }),
    enabled: submitted,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get_sections', id],
      });
      setSubmitted(false);
    },
  });

  const handleCreate = () => {
    setSubmitted(true);
  };

  return { createSection, handleCreate };
};
