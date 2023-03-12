import { Breadcrumbs, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router';

import { MainLink } from '../components/links/MainLink';
import { QuizesLink } from '../components/links/QuizesLink';
import { Space } from '../components/Space';
import { EditQuizInfo } from './edit/EditQuizInfo';

export type QuizFormValues = {
  name: string;
};

export const EditQuizPage = () => {
  const { id } = useParams();

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <MainLink />
        <QuizesLink />
        <Typography color="text.primary">{id}</Typography>
      </Breadcrumbs>
      <Space />
      <EditQuizInfo />
    </>
  );
};
