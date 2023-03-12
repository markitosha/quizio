import { Stack } from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useParams } from 'react-router';

import { CustomTextField } from '../../components/fields/CustomTextField';
import { RedButton } from '../../components/fields/RedButton';
import { SubmitButton } from '../../components/fields/SubmitButton';
import { RequestedData } from '../../components/RequestedData';
import { QuizFormValues } from '../EditQuizPage';
import { useUpdateQuiz } from '../hooks/useUpdateQuiz';

export const EditQuizInfo = () => {
  const methods = useForm<QuizFormValues>();
  const { id } = useParams();
  const { getQuiz, handleSubmit, handleCancel } = useUpdateQuiz(methods, id);

  const name = methods.watch('name');

  const formRender = () => (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <Stack spacing={2}>
          <CustomTextField name={'name'} />
          {name !== getQuiz.data.name && (
            <Stack spacing={2} direction={'row'}>
              <SubmitButton>Update</SubmitButton>
              <RedButton onClick={handleCancel}>Cancel</RedButton>
            </Stack>
          )}
        </Stack>
      </form>
    </FormProvider>
  );

  return <RequestedData query={getQuiz} render={formRender} />;
};
