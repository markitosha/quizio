import { useQuery } from '@tanstack/react-query';

import { fetchFromApi } from '../../../utils/fetchFromApi';

type Quiz = {
  name: string;
  id: number;
};

export const useGetQuizes = () => {
  const quizesList = useQuery<Quiz[]>({
    queryKey: ['get_quizes'],
    queryFn: () => fetchFromApi({ path: 'quizes' }),
  });

  return { quizesList };
};
