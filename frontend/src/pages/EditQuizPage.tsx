import { Breadcrumbs, Stack, Typography } from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useParams } from 'react-router';

import { CustomTextField } from '../components/fields/CustomTextField';
import { RedButton } from '../components/fields/RedButton';
import { SubmitButton } from '../components/fields/SubmitButton';
import { MainLink } from '../components/links/MainLink';
import { QuizesLink } from '../components/links/QuizesLink';
import { RequestedData } from '../components/RequestedData';
import { Space } from '../components/Space';
import { useUpdateQuiz } from './hooks/useUpdateQuiz';

export type QuizFormValues = {
  name: string;
};

export const EditQuizPage = () => {
  const methods = useForm<QuizFormValues>();
  const { id } = useParams();
  const { getQuiz, handleSubmit, handleCancel } = useUpdateQuiz(methods, id);

  const name = methods.watch('name');

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <MainLink />
        <QuizesLink />
        <Typography color="text.primary">{id}</Typography>
      </Breadcrumbs>
      <Space />
      <RequestedData query={getQuiz}>
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
      </RequestedData>
    </>
  );
};
