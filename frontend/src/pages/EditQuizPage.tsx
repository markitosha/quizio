import { Button, CircularProgress, TextField } from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useUpdateQuiz } from './hooks/useUpdateQuiz';

export const EditQuizPage = () => {
  const methods = useForm();
  const { getQuiz, handleSubmit } = useUpdateQuiz(methods);

  const name = methods.watch('name');

  if (getQuiz.isLoading) {
    return <CircularProgress />;
  }

  if (getQuiz.isError) {
    return <div>Error</div>;
  }

  // TODO fields to components
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <TextField
          name={'name'}
          variant={'outlined'}
          inputProps={{
            sx: {
              color: 'white',
            },
            ...methods.register('name'),
          }}
        ></TextField>
        {name !== getQuiz.data.name && <Button type={'submit'}>Update</Button>}
      </form>
    </FormProvider>
  );
};
