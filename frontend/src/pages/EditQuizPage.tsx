import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchFromApi } from '../utils/fetchFromApi';
import { Button, CircularProgress, TextField } from '@mui/material';
import { useParams } from 'react-router';
import { FormProvider, useForm } from 'react-hook-form';
import { useState } from 'react';

export const EditQuizPage = () => {
  const methods = useForm();
  const { id } = useParams();
  const queryClient = useQueryClient();

  // TODO hook
  const [submitted, setSubmitted] = useState(false);
  const getQuiz = useQuery({
    queryKey: ['getQuiz', id],
    queryFn: () => fetchFromApi({
      path: `quizes/${id}`,
      method: 'get'
    }),
    onSuccess: (data) => {
      methods.setValue('name', data.name);
    }
  });

  useQuery({
    queryKey: ['patchQuiz', id],
    queryFn: () => fetchFromApi({
      path: `quizes/${id}`,
      method: 'PATCH',
      body: methods.getValues()
    }),
    enabled: submitted,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['getQuiz', id]
      });
      setSubmitted(false);
    }
  });

  const name = methods.watch('name');

  const handleSubmit = () => {
    setSubmitted(true);
  }

  if (getQuiz.isLoading) {
    return <CircularProgress />;
  }

  if (getQuiz.isError) {
    return <div>Error</div>;
  }

  // TODO fields to components
  return <FormProvider {...methods}>
    <form onSubmit={methods.handleSubmit(handleSubmit)}>
      <TextField name={"name"} variant={'outlined'} inputProps={{
        sx: {
          color: 'white'
        },
        ...methods.register('name')
      }}></TextField>
      {name !== getQuiz.data.name && <Button type={'submit'}>Update</Button>}
    </form>
  </FormProvider>;
}