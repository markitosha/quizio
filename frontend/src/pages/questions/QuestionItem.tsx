import { Button, Container, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router';

import { RedButton } from '../../components/fields/RedButton';
import { Space } from '../../components/Space';
import {
  QuestionType,
  useDeleteQuestion,
} from '../request_hooks/question.query';

type Props = QuestionType;

export const QuestionItem: React.FC<Props> = ({
  question,
  variants,
  type,
  id,
  answer,
  value,
}) => {
  const { quizId, sectionId } = useParams();
  const navigate = useNavigate();

  if (!quizId || !sectionId) {
    return null;
  }

  const { setDeleteId } = useDeleteQuestion(quizId, sectionId);

  return (
    <Paper variant={'outlined'}>
      <Container>
        <Stack spacing={2}>
          <Typography variant={'overline'}>Type: {type}</Typography>
          <Typography variant={'h6'}>Question: {question}</Typography>
          <ul>
            {variants.map((item, index) => (
              <li key={index}>
                <Typography variant={'body1'}>
                  {item} <b>{index === answer && '<-- answer'}</b>
                </Typography>
              </li>
            ))}
          </ul>
          <Typography variant={'subtitle2'}>
            Question weight: {value}
          </Typography>
          <Stack direction={'row'} spacing={2}>
            <Button
              variant={'outlined'}
              fullWidth
              onClick={() => navigate(`questions/${id}`)}
            >
              Edit
            </Button>
            <RedButton onClick={() => setDeleteId(id)}>Delete</RedButton>
          </Stack>
        </Stack>
        <Space />
      </Container>
    </Paper>
  );
};
