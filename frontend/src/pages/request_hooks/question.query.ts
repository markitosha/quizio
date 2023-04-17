import { UseFormReturn } from 'react-hook-form';

import { useCreateItem } from '../../hooks/useCreateItem';
import { useDeleteItem } from '../../hooks/useDeleteItem';
import { useGetItem } from '../../hooks/useGetItem';
import { useGetList } from '../../hooks/useGetList';
import { useSortableList } from '../../hooks/useSortList';
import { useUpdateItem } from '../../hooks/useUpdateItem';
import { RequestKeys } from './RequestKeys';

export type QType = 'one_variant';

export type QuestionType = {
  id: string;
  question: string;
  type: QType;
  variants: string[];
  index: number;
};

const getPath = (quizId: string, sectionId: string) =>
  `quizes/${quizId}/sections/${sectionId}/questions`;

export const useCreateQuestion = (quizId: string, sectionId: string) =>
  useCreateItem<QuestionType>(
    RequestKeys.CreateQuestion,
    getPath(quizId, sectionId),
    {},
    RequestKeys.GetQuestions,
  );
export const useDeleteQuestion = (quizId: string, sectionId: string) =>
  useDeleteItem<QuestionType>(
    RequestKeys.DeleteQuestion,
    getPath(quizId, sectionId),
    RequestKeys.GetQuestions,
  );
export const useGetQuestionList = (quizId: string, sectionId: string) =>
  useGetList<QuestionType>(
    RequestKeys.GetQuestions,
    getPath(quizId, sectionId),
  );

export const useGetQuestion = (
  quizId: string,
  sectionId: string,
  questionId: string,
) =>
  useGetItem<QuestionType>(
    [RequestKeys.GetQuestion, questionId],
    getPath(quizId, sectionId),
  );
export const useUpdateQuestion = (
  quizId: string,
  sectionId: string,
  questionId: string,
  values: UseFormReturn,
) =>
  useUpdateItem<QuestionType>(
    [RequestKeys.PatchQuestion, questionId],
    values,
    getPath(quizId, sectionId),
    RequestKeys.GetQuestion,
  );

export const useSortQuestion = (
  quizId: string,
  sectionId: string,
  list: QuestionType[],
) =>
  useSortableList<QuestionType>(
    list,
    [RequestKeys.SortQuestions, sectionId],
    getPath(quizId, sectionId),
    RequestKeys.GetQuestions,
  );
