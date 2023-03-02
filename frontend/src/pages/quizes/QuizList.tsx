import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Stack,
} from '@mui/material';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import { fetchFromApi } from '../../utils/fetchFromApi';

// TODO different hooks and divide to files
const useQuizApi = () => {
  const queryClient = useQueryClient();
  // get all
  const quizesList = useQuery({
    queryKey: ['quizes'],
    queryFn: () => fetchFromApi({ path: 'quizes' }),
  });

  // delete
  const [deleteId, setDeleteId] = useState(-1);

  useQuery({
    queryKey: ['delete', deleteId],
    queryFn: ({ queryKey: [, deleteId] }) =>
      fetchFromApi({ path: `quizes/${deleteId}`, method: 'delete' }),
    enabled: deleteId !== -1,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['quizes'] });
      setDeleteId(-1);
    },
  });

  return {
    quizesList,
    setDeleteId,
    deleteId,
  };
};

export const QuizList = () => {
  const { quizesList, setDeleteId, deleteId } = useQuizApi();
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
