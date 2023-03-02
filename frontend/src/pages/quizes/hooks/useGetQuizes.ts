import { useQuery } from '@tanstack/react-query';

import { fetchFromApi } from '../../../utils/fetchFromApi';

export const useGetQuizes = () => {
  const quizesList = useQuery({
    queryKey: ['quizes'],
    queryFn: () => fetchFromApi({ path: 'quizes' }),
  });

  return { quizesList };
};
