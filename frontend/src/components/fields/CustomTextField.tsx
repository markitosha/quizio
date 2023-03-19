import { TextField } from '@mui/material';
import React from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  name: string;
  label?: string;
  defaultValue?: string;
};

export const CustomTextField: React.FC<Props> = ({
  name,
  label,
  defaultValue,
}) => {
  const methods = useFormContext();

  return (
    <TextField
      name={name}
      variant={'outlined'}
      label={label || name}
      defaultValue={defaultValue}
      required
      inputProps={{
        ...methods.register(name),
      }}
    />
  );
};
