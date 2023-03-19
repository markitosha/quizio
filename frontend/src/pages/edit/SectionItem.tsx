import { Button, Stack } from '@mui/material';
import React from 'react';

import { CustomTextField } from '../../components/fields/CustomTextField';
import { HookForm } from '../../components/HookForm';
import { Space } from '../../components/Space';
import { useDeleteSection } from '../hooks/section/useDeleteSection';
import { useUpdateSection } from '../hooks/section/useUpdateSection';

type Props = {
  name: string;
  id: number;
};

export const SectionItem: React.FC<Props> = ({ name, id }) => {
  const { handleDelete } = useDeleteSection();
  const { methods, currentName, handleCancel, handleSubmit } =
    useUpdateSection(id);

  return (
    <HookForm methods={methods} handleSubmit={handleSubmit}>
      <Space />
      <Stack spacing={2}>
        <CustomTextField
          name={'name'}
          label={'section name'}
          defaultValue={name}
        />
        <Stack direction={'row'}>
          <Button color={'primary'} fullWidth>
            Add question
          </Button>
          <Button
            color={'primary'}
            type={'submit'}
            disabled={!currentName || currentName === name}
            fullWidth
          >
            Save changes
          </Button>
          <Button
            color={'secondary'}
            onClick={handleCancel}
            disabled={!currentName || currentName === name}
            fullWidth
          >
            Cancel changes
          </Button>
          <Button
            color={'secondary'}
            onClick={() => handleDelete(id)}
            fullWidth
          >
            Delete
          </Button>
        </Stack>
      </Stack>
    </HookForm>
  );
};
