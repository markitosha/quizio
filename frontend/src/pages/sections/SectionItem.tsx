import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router';

import { Space } from '../../components/Space';
import { useDeleteSection } from '../request_hooks/section.query';

type Props = {
  name: string;
  id: string;
};

export const SectionItem: React.FC<Props> = ({ name, id }) => {
  const { quizId } = useParams();

  if (!quizId) {
    return null;
  }

  const { setDeleteId } = useDeleteSection(quizId);
  const navigate = useNavigate();

  return (
    <>
      <Space />
      <Stack spacing={2}>
        <Typography color="text.primary">{name}</Typography>
        <Stack direction={'row'}>
          <Button
            color={'primary'}
            fullWidth
            onClick={() => navigate(`sections/${id}`)}
          >
            Edit
          </Button>
          <Button color={'secondary'} onClick={() => setDeleteId(id)} fullWidth>
            Delete
          </Button>
        </Stack>
      </Stack>
    </>
  );
};
