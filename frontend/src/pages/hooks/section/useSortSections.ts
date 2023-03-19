import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router';

import { fetchFromApi } from '../../../utils/fetchFromApi';

import { SectionType } from './useGetSections';

export const useSortSections = (list: SectionType[]) => {
  const { id } = useParams();
  const [sortedList, setSortedList] = useState<SectionType[] | null>(null);
  const queryClient = useQueryClient();

  useQuery({
    queryKey: ['sort_sections', id],
    enabled: !!sortedList,
    queryFn: () =>
      fetchFromApi({
        path: `quizes/${id}/sections`,
        method: 'PATCH',
        body: {
          data: sortedList?.map(({ id }, index) => ({
            id,
            index,
          })),
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get_sections', id],
      });
      setSortedList(null);
    },
  });

  const handleSortEnd = (oldIndex: number, newIndex: number) => {
    const newList = [...list];
    const item = newList.splice(oldIndex, 1);

    newList.splice(newIndex, 0, ...item);

    setSortedList(newList);
  };

  return {
    handleSortEnd,
    sortedList,
  };
};
