import { TextField } from '@mui/material';
import React from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  name: string;
  defaultValue?: number;
  label: string;
};

export const CustomNumeric: React.FC<Props> = ({
  name,
  defaultValue,
  label,
}) => {
  const methods = useFormContext();

  return (
    <TextField
      label={label}
      defaultValue={defaultValue}
      inputProps={{
        inputMode: 'numeric',
        pattern: '[0-9]*',
        ...methods.register(name),
      }}
    />
  );
};
