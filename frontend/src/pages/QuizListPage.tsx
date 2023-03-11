import { Breadcrumbs, Typography } from '@mui/material';
import React from 'react';

import { MainLink } from '../components/links/MainLink';
import { CreateQuizButton } from './quizes/CreateQuizButton';
import { QuizList } from './quizes/QuizList';

export const QuizListPage = () => {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <MainLink />
        <Typography color="text.primary">Quizes</Typography>
      </Breadcrumbs>
      <CreateQuizButton />
      <QuizList />
    </>
  );
};
