import { useQuery } from '@tanstack/react-query';

import { fetchFromApi } from '../utils/fetchFromApi';

import { RequestKeys } from '../pages/request_hooks/RequestKeys';

export const useGetItem = <T>(
  queryKey: [RequestKeys, string],
  path: string,
) => {
  const query = useQuery<T>({
    queryKey: queryKey,
    queryFn: () => fetchFromApi({ path: `${path}/${queryKey[1]}` }),
  });

  return { query };
};
