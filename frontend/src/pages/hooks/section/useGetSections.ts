import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

import { fetchFromApi } from '../../../utils/fetchFromApi';

export type SectionType = {
  name: string;
  id: number;
  index: number;
};

export const useGetSections = () => {
  const { id } = useParams();
  const sectionsList = useQuery<SectionType[]>({
    queryKey: ['get_sections', id],
    queryFn: () => fetchFromApi({ path: `quizes/${id}/sections` }),
  });

  return { sectionsList };
};
