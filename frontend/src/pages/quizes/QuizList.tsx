import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Stack,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';

import { useDeleteQuiz } from './hooks/useDeleteQuiz';
import { useGetQuizes } from './hooks/useGetQuizes';

export const QuizList = () => {
  const { quizesList } = useGetQuizes();
  const { setDeleteId, deleteId } = useDeleteQuiz();
  const navigate = useNavigate();

  // TODO error boundary / suspence / react-router
  if (quizesList.isError) {
    return <>Error happened</>;
  }

  if (quizesList.isLoading) {
    return <CircularProgress />;
  }

  if (quizesList.data.length === 0) {
    return (
      <>You don&apos;t have any quizes right now. Let&apos;s create one!</>
    );
  }

  return (
    <Stack spacing={2}>
      {quizesList.data.map((item: any) => (
        <Card
          key={item.id}
          variant={'outlined'}
          color={'transparent'}
          sx={{
            opacity: item.id === deleteId ? 0.5 : 1,
          }}
        >
          <CardContent>{item.id || 'noname'}</CardContent>
          <CardActions>
            <Button onClick={() => navigate(`${item.id}`)}>Edit</Button>
            <Button color={'error'} onClick={() => setDeleteId(item.id)}>
              Delete
            </Button>
          </CardActions>
        </Card>
      ))}
    </Stack>
  );
};
