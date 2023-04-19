import { UseFormReturn } from 'react-hook-form';

import { useCreateItem } from '../../hooks/useCreateItem';
import { useDeleteItem } from '../../hooks/useDeleteItem';
import { useGetItem } from '../../hooks/useGetItem';
import { useGetList } from '../../hooks/useGetList';
import { useUpdateItem } from '../../hooks/useUpdateItem';
import { RequestKeys } from './RequestKeys';

export type QuizType = {
  name: string;
  id: number;
};

export const useCreateQuiz = () =>
  useCreateItem<QuizType>(RequestKeys.CreateQuiz, 'quizes');
export const useDeleteQuiz = () =>
  useDeleteItem<QuizType>(
    RequestKeys.DeleteQuiz,
    'quizes',
    RequestKeys.GetQuizes,
  );
export const useGetQuizList = () =>
  useGetList<QuizType>(RequestKeys.GetQuizes, 'quizes');

export const useGetQuiz = (quizId: string) =>
  useGetItem<QuizType>([RequestKeys.GetQuiz, quizId], 'quizes');
export const useUpdateQuiz = (quizId: string, values: UseFormReturn) =>
  useUpdateItem<QuizType>(
    [RequestKeys.PatchQuiz, quizId],
    values,
    'quizes',
    RequestKeys.GetQuiz,
  );
