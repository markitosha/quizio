import { Stack } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

import { CustomTextField } from '../../components/fields/CustomTextField';
import { RedButton } from '../../components/fields/RedButton';
import { SubmitButton } from '../../components/fields/SubmitButton';
import { HookForm } from '../../components/HookForm';
import { RequestedData } from '../../components/RequestedData';
import { useUpdateQuiz } from '../hooks/quiz/useUpdateQuiz';

export const EditQuizInfo = () => {
  const methods = useForm();
  const { id } = useParams();
  const { getQuiz, handleSubmit, handleCancel } = useUpdateQuiz(methods, id);

  const name = methods.watch('name');

  const formRender = () => (
    <HookForm handleSubmit={handleSubmit} methods={methods}>
      <Stack spacing={2}>
        <CustomTextField name={'name'} />
        {name !== getQuiz.data.name && (
          <Stack spacing={2} direction={'row'}>
            <SubmitButton>Update</SubmitButton>
            <RedButton onClick={handleCancel}>Cancel</RedButton>
          </Stack>
        )}
      </Stack>
    </HookForm>
  );

  return <RequestedData query={getQuiz} render={formRender} />;
};
