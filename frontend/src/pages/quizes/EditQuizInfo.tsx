import { Stack } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

import { CustomTextField } from '../../components/fields/CustomTextField';
import { RedButton } from '../../components/fields/RedButton';
import { SubmitButton } from '../../components/fields/SubmitButton';
import { HookForm } from '../../components/HookForm';
import { RequestedData } from '../../components/RequestedData';
import { useGetRequestFormSync } from '../../hooks/useGetRequestFormSync';
import {
  QuizType,
  useGetQuiz,
  useUpdateQuiz,
} from '../request_hooks/quiz.query';

export const EditQuizInfo = () => {
  const methods = useForm();
  const { quizId } = useParams<{ quizId: string }>();

  if (!quizId) {
    return null;
  }

  const { query } = useGetQuiz(quizId);
  const { handleSubmit } = useUpdateQuiz(quizId, methods);
  const { handleCancel } = useGetRequestFormSync<QuizType>(
    query,
    methods,
    'name',
  );

  const name = methods.watch('name');

  const formRender = () => (
    <HookForm handleSubmit={handleSubmit} methods={methods}>
      <Stack spacing={2}>
        <CustomTextField name={'name'} />
        {name !== query.data?.name && (
          <Stack spacing={2} direction={'row'}>
            <SubmitButton>Update</SubmitButton>
            <RedButton onClick={handleCancel}>Cancel</RedButton>
          </Stack>
        )}
      </Stack>
    </HookForm>
  );

  return <RequestedData query={query} render={formRender} />;
};
