import { Button } from '@mui/material';
import React, { PropsWithChildren } from 'react';

type Props = {
  onClick: () => void;
  fullWidth?: boolean;
};

export const RedButton: React.FC<PropsWithChildren<Props>> = ({
  children,
  onClick,
  fullWidth = true,
}) => {
  return (
    <Button
      type={'button'}
      color={'secondary'}
      onClick={onClick}
      variant={'outlined'}
      fullWidth={fullWidth}
    >
      {children}
    </Button>
  );
};
