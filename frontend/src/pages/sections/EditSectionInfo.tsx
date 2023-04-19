import { Stack } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

import { CustomTextField } from '../../components/fields/CustomTextField';
import { RedButton } from '../../components/fields/RedButton';
import { SubmitButton } from '../../components/fields/SubmitButton';
import { HookForm } from '../../components/HookForm';
import { RequestedData } from '../../components/RequestedData';
import { useGetRequestFormSync } from '../../hooks/useGetRequestFormSync';
import {
  useGetSection,
  useUpdateSection,
} from '../request_hooks/section.query';

export const EditSectionInfo = () => {
  const { quizId, sectionId } = useParams();

  if (!quizId || !sectionId) {
    return null;
  }

  const methods = useForm();
  const { query: getSection } = useGetSection(quizId, sectionId);
  const { handleSubmit } = useUpdateSection(quizId, sectionId, methods);
  const { handleCancel } = useGetRequestFormSync(getSection, methods, 'name');

  const name = methods.watch('name');

  const formRender = () => (
    <HookForm handleSubmit={handleSubmit} methods={methods}>
      <Stack spacing={2}>
        <CustomTextField name={'name'} defaultValue={name} />
        {name !== getSection.data?.name && (
          <Stack spacing={2} direction={'row'}>
            <SubmitButton>Update</SubmitButton>
            <RedButton onClick={handleCancel}>Cancel</RedButton>
          </Stack>
        )}
      </Stack>
    </HookForm>
  );

  return <RequestedData query={getSection} render={formRender} />;
};
