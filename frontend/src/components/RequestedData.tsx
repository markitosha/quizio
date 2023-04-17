import { Alert, CircularProgress } from '@mui/material';
import { UseQueryResult } from '@tanstack/react-query';
import React, { PropsWithChildren, ReactElement, ReactNode } from 'react';

type Props = {
  query: UseQueryResult;
  errorText?: string;
  render?: () => ReactElement;
};

export const RequestedData: React.FC<Props> = ({
  query,
  errorText = 'Something went wrong',
  render,
}) => {
  if (query.isLoading) {
    return <CircularProgress />;
  }

  if (query.isError) {
    return <Alert severity="error">{errorText}</Alert>;
  }

  if (!query.data || (query.data instanceof Array && query.data.length === 0)) {
    return <Alert severity="info">Empty data</Alert>;
  }

  return render ? render() : null;
};
