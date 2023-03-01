import React from 'react';
import { QuizList } from './quizes/QuizList';
import { CreateQuizButton } from './quizes/CreateQuizButton';

export const QuizListPage = () => {
  return (
    <>
      <CreateQuizButton />
      <QuizList />
    </>
  );
};
