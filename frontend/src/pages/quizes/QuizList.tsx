import { Button, Card, CardActions, CardContent, Stack } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';

import { RequestedData } from '../../components/RequestedData';
import { useDeleteQuiz, useGetQuizList } from '../request_hooks/quiz.query';

export const QuizList = () => {
  const { query: quizList } = useGetQuizList();
  const { setDeleteId, deleteId } = useDeleteQuiz();
  const navigate = useNavigate();

  const quizListRender = () => (
    <Stack spacing={2}>
      {quizList.data?.map((item) => (
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

  return <RequestedData query={quizList} render={quizListRender} />;
};
