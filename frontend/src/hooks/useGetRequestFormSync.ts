import { UseQueryResult } from '@tanstack/react-query';
import { useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form';

export const useGetRequestFormSync = <T extends Record<string, any>>(
  getQuery: UseQueryResult<T>,
  methods: UseFormReturn,
  fieldName: string,
) => {
  useEffect(() => {
    if (getQuery.isSuccess && getQuery.data?.[fieldName]) {
      methods.setValue(fieldName, getQuery.data[fieldName]);
    }
  }, [getQuery.status, fieldName, getQuery.isSuccess, getQuery.data, methods]);

  const handleCancel = () => {
    if (getQuery.data?.[fieldName]) {
      methods.setValue(fieldName, getQuery.data[fieldName]);
    }
  };

  return { handleCancel };
};
