import { Breadcrumbs, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router';

import { MainLink } from '../components/links/MainLink';
import { QuizesLink } from '../components/links/QuizesLink';
import { Space } from '../components/Space';
import { EditQuizInfo } from './quizes/EditQuizInfo';
import { SectionsList } from './sections/SectionsList';

export const EditQuizPage = () => {
  const { quizId } = useParams();

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <MainLink />
        <QuizesLink />
        <Typography color="text.primary">Quiz {quizId}</Typography>
      </Breadcrumbs>
      <Space />
      <EditQuizInfo />
      <Space />
      <SectionsList />
    </>
  );
};
