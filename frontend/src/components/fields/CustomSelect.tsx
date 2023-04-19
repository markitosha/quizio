import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  values: string[];
  label: string;
  name: string;
  defaultValue?: string;
};

export const CustomSelect: React.FC<Props> = ({
  values,
  label,
  name,
  defaultValue,
}) => {
  const methods = useFormContext();

  return (
    <FormControl fullWidth>
      <InputLabel id={name + '-label'}>{label}</InputLabel>
      <Select
        labelId={name + '-label'}
        id={name}
        label={label}
        defaultValue={defaultValue || values[0]}
        inputProps={{
          ...methods.register(name),
        }}
      >
        {values.map((v) => (
          <MenuItem key={v} value={v}>
            {v}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
