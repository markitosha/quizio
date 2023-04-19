import { Stack, TextField } from '@mui/material';
import React from 'react';

import { BlueButton } from '../../components/fields/BlueButton';
import { GreenButton } from '../../components/fields/GreenButton';
import { RedButton } from '../../components/fields/RedButton';
import { useVariantsAndAnswerField } from '../hooks/useVariantsAndAnswerField';
import { QuestionType } from '../request_hooks/question.query';

type Props = Partial<QuestionType>;

export const OneAnswerQuestion: React.FC<Props> = ({ variants, answer }) => {
  const {
    answerField,
    variantsField,
    handleDeleteVariant,
    handleSelectAnswer,
    handleChangeVariant,
    handleAddVariant,
  } = useVariantsAndAnswerField({ variants, answer });

  return (
    <>
      {variantsField.value.map((v: string, index: number) => (
        <Stack key={index + v} direction={'row'} spacing={2}>
          <TextField
            onBlur={handleChangeVariant(index)}
            variant={'standard'}
            defaultValue={v}
            fullWidth
          />
          {index !== answerField.value ? (
            <BlueButton onClick={handleSelectAnswer(index)} fullWidth={false}>
              Select
            </BlueButton>
          ) : (
            <GreenButton onClick={() => null} fullWidth={false}>
              Answer
            </GreenButton>
          )}
          <RedButton onClick={handleDeleteVariant(index)} fullWidth={false}>
            Delete
          </RedButton>
        </Stack>
      ))}
      <BlueButton onClick={handleAddVariant}>Add variant</BlueButton>
    </>
  );
};
