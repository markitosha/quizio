import { Button } from '@mui/material';
import React, { PropsWithChildren } from 'react';

type Props = {
  onClick: () => void;
};

export const RedButton: React.FC<PropsWithChildren<Props>> = ({
  children,
  onClick,
}) => {
  return (
    <Button
      type={'button'}
      color={'secondary'}
      onClick={onClick}
      variant={'outlined'}
      fullWidth
    >
      {children}
    </Button>
  );
};
