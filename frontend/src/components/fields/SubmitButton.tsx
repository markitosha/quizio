import { Button } from '@mui/material';
import React, { PropsWithChildren } from 'react';

export const SubmitButton: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Button type={'submit'} variant={'outlined'} fullWidth>
      {children}
    </Button>
  );
};
