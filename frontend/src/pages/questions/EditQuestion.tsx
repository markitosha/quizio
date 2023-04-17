import { Container, Paper, Stack } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

import { HookForm } from '../../components/HookForm';
import { RequestedData } from '../../components/RequestedData';
import {
  useGetQuestion,
  useUpdateQuestion,
} from '../request_hooks/question.query';

export const EditQuestion: React.FC = () => {
  const { quizId, sectionId, questionId } = useParams();

  if (!quizId || !sectionId || !questionId) {
    return null;
  }

  const { query } = useGetQuestion(quizId, sectionId, questionId);
  const methods = useForm();
  const { handleSubmit } = useUpdateQuestion(
    quizId,
    sectionId,
    questionId,
    methods,
  );

  const renderItem = () => (
    <Paper>
      <Container>
        <HookForm handleSubmit={handleSubmit} methods={methods}>
          <Stack spacing={2}>{query.data?.question}</Stack>
        </HookForm>
      </Container>
    </Paper>
  );

  return <RequestedData query={query} render={renderItem} />;
};
