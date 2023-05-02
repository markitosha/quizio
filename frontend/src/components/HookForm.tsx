import React, { PropsWithChildren } from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';

type Props = {
  handleSubmit: () => void;
  methods: UseFormReturn;
};

export const HookForm: React.FC<PropsWithChildren<Props>> = ({
  handleSubmit,
  children,
  methods,
}) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <FormProvider {...methods}>
    <form onSubmit={methods.handleSubmit(handleSubmit)}>{children}</form>
  </FormProvider>
);
