import { TextField } from '@mui/material';
import React from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  name: string;
};

export const CustomTextField: React.FC<Props> = ({ name }) => {
  const methods = useFormContext();

  return (
    <TextField
      name={name}
      variant={'outlined'}
      inputProps={{
        ...methods.register(name),
      }}
    />
  );
};
