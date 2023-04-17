import { Breadcrumbs, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router';

import { MainLink } from '../components/links/MainLink';
import { QuizeLink } from '../components/links/QuizeLink';
import { QuizesLink } from '../components/links/QuizesLink';
import { Space } from '../components/Space';
import { QuestionList } from './questions/QuestionList';
import { EditSectionInfo } from './sections/EditSectionInfo';

export const EditSectionPage = () => {
  const { quizId, sectionId } = useParams();

  if (!sectionId) {
    return null;
  }

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <MainLink />
        <QuizesLink />
        <QuizeLink id={quizId} />
        <Typography color="text.primary">Section {sectionId}</Typography>
      </Breadcrumbs>
      <Space />
      <EditSectionInfo />
      <Space />
      <QuestionList />
    </>
  );
};
