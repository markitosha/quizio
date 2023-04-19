import { Button } from '@mui/material';
import React, { PropsWithChildren } from 'react';

type Props = {
  onClick: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
};

export const BlueButton: React.FC<PropsWithChildren<Props>> = ({
  children,
  onClick,
  fullWidth = true,
  disabled = false,
}) => {
  return (
    <Button
      type={'button'}
      color={'primary'}
      onClick={onClick}
      variant={'outlined'}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};
