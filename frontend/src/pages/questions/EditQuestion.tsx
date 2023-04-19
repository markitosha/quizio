import { Container, Paper, Stack, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

import { CustomNumeric } from '../../components/fields/CustomNumeric';
import { CustomSelect } from '../../components/fields/CustomSelect';
import { CustomTextField } from '../../components/fields/CustomTextField';
import { RedButton } from '../../components/fields/RedButton';
import { SubmitButton } from '../../components/fields/SubmitButton';
import { HookForm } from '../../components/HookForm';
import { RequestedData } from '../../components/RequestedData';
import {
  useGetQuestion,
  useUpdateQuestion,
} from '../request_hooks/question.query';
import { OneAnswerQuestion } from './OneAnswerQuestion';

export const EditQuestion: React.FC = () => {
  const { quizId, sectionId, questionId } = useParams();

  if (!quizId || !sectionId || !questionId) {
    return null;
  }

  const { query } = useGetQuestion(quizId, sectionId, questionId);
  const methods = useForm();
  const { handleSubmit } = useUpdateQuestion(
    quizId,
    sectionId,
    questionId,
    methods,
  );

  const renderItem = () => (
    <Paper>
      <Container>
        <HookForm handleSubmit={handleSubmit} methods={methods}>
          <Container
            sx={{
              padding: '20px 0',
            }}
          >
            <Stack spacing={4}>
              <CustomTextField
                name={'question'}
                defaultValue={query.data?.question}
              />
              <CustomSelect
                name={'type'}
                label={'type'}
                values={['one_answer']}
              />
              <OneAnswerQuestion {...query.data} />
              <CustomNumeric
                defaultValue={query.data?.value}
                name={'value'}
                label={'Question value'}
              />
              <Stack direction={'row'} spacing={2}>
                <SubmitButton>Save</SubmitButton>
                <RedButton onClick={() => methods.reset(query.data)}>
                  Cancel
                </RedButton>
              </Stack>
            </Stack>
          </Container>
        </HookForm>
      </Container>
    </Paper>
  );

  return <RequestedData query={query} render={renderItem} />;
};
