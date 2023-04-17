import { Button, Container, Paper, Stack } from '@mui/material';
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
          <div>{type}</div>
          <div>{question}</div>
          {variants.map((item, index) => (
            <span key={index}>Variant: {item}</span>
          ))}
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
