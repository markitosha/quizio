import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { fetchFromApi } from '../utils/fetchFromApi';

import { RequestKeys } from '../pages/request_hooks/RequestKeys';

type SortableType = {
  id: string;
  index: number;
};

export const useSortableList = <T extends SortableType>(
  list: T[],
  queryKey: [RequestKeys, string],
  path: string,
  invalidate: RequestKeys,
) => {
  const [sortedList, setSortedList] = useState<T[] | null>(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    setSortedList(null);
  }, [list]);

  useQuery({
    queryKey: queryKey,
    enabled: !!sortedList,
    queryFn: () =>
      fetchFromApi({
        path: path,
        method: 'PATCH',
        body: {
          data: sortedList?.map(({ id }: T, index) => ({
            id,
            index,
          })),
        },
      }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [invalidate],
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
    sortedList: sortedList || list,
  };
};
