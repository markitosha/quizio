import { Breadcrumbs, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router';

import { MainLink } from '../components/links/MainLink';
import { QuizeLink } from '../components/links/QuizeLink';
import { QuizesLink } from '../components/links/QuizesLink';
import { SectionLink } from '../components/links/SectionLink';
import { Space } from '../components/Space';
import { EditQuestion } from './questions/EditQuestion';

export const EditQuestionPage = () => {
  const { quizId, sectionId, questionId } = useParams();

  if (!sectionId) {
    return null;
  }

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <MainLink />
        <QuizesLink />
        <QuizeLink id={quizId} />
        <SectionLink id={sectionId} quizId={quizId} />
        <Typography color="text.primary">Question {questionId}</Typography>
      </Breadcrumbs>
      <Space />
      <EditQuestion />
    </>
  );
};
