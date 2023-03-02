import React from 'react';

import { CreateQuizButton } from './quizes/CreateQuizButton';
import { QuizList } from './quizes/QuizList';

export const QuizListPage = () => {
  return (
    <>
      <CreateQuizButton />
      <QuizList />
    </>
  );
};
