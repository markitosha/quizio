import { useQuery } from '@tanstack/react-query';

import { fetchFromApi } from '../utils/fetchFromApi';

import { RequestKeys } from '../pages/request_hooks/RequestKeys';

export const useGetList = <T>(queryKey: RequestKeys, path: string) => {
  const query = useQuery<T[]>({
    queryKey: [queryKey],
    queryFn: () => fetchFromApi({ path }),
  });

  return { query };
};
