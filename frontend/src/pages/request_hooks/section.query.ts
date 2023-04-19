import { UseFormReturn } from 'react-hook-form';

import { useCreateItem } from '../../hooks/useCreateItem';
import { useDeleteItem } from '../../hooks/useDeleteItem';
import { useGetItem } from '../../hooks/useGetItem';
import { useGetList } from '../../hooks/useGetList';
import { useSortableList } from '../../hooks/useSortList';
import { useUpdateItem } from '../../hooks/useUpdateItem';
import { RequestKeys } from './RequestKeys';

export type SectionType = {
  name: string;
  id: string;
  index: number;
};

const getPath = (quizId: string) => `quizes/${quizId}/sections`;

export const useCreateSection = (quizId: string) =>
  useCreateItem<SectionType>(
    RequestKeys.CreateSection,
    getPath(quizId),
    {},
    RequestKeys.GetSections,
  );
export const useDeleteSection = (quizId: string) =>
  useDeleteItem<SectionType>(
    RequestKeys.DeleteSection,
    getPath(quizId),
    RequestKeys.GetSections,
  );
export const useGetSectionList = (quizId: string) =>
  useGetList<SectionType>(RequestKeys.GetSections, getPath(quizId));

export const useGetSection = (quizId: string, sectionId: string) =>
  useGetItem<SectionType>([RequestKeys.GetSection, sectionId], getPath(quizId));
export const useUpdateSection = (
  quizId: string,
  sectionId: string,
  values: UseFormReturn,
) =>
  useUpdateItem<SectionType>(
    [RequestKeys.PatchSection, sectionId],
    values,
    getPath(quizId),
    RequestKeys.GetSection,
  );

export const useSortSections = (quizId: string, list: SectionType[]) =>
  useSortableList<SectionType>(
    list,
    [RequestKeys.SortSections, quizId],
    getPath(quizId),
    RequestKeys.GetSections,
  );
