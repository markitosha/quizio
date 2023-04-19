import { useController, useFormContext } from 'react-hook-form';

type Props = {
  variants?: string[];
  answer?: number;
};

export const useVariantsAndAnswerField = ({ variants, answer }: Props) => {
  const { control } = useFormContext();
  const { field: variantsField } = useController({
    name: 'variants',
    control,
    defaultValue: variants,
  });
  const { field: answerField } = useController({
    name: 'answer',
    control,
    defaultValue: answer,
  });

  const handleAddVariant = () => {
    variantsField.onChange([...variantsField.value, 'answer']);
  };

  const handleChangeVariant = (idx: number) => (e: any) => {
    const valueCopy = [...variantsField.value];

    valueCopy[idx] = e.target.value;
    variantsField.onChange(valueCopy);
  };

  const handleDeleteVariant = (idx: number) => () => {
    const valueCopy = [...variantsField.value];

    valueCopy.splice(idx, 1);
    variantsField.onChange(valueCopy);

    if (idx === answerField.value) {
      answerField.onChange(0);
    } else if (idx < answerField.value) {
      answerField.onChange(answerField.value - 1);
    }
  };

  const handleSelectAnswer = (idx: number) => () => {
    answerField.onChange(idx);
  };

  return {
    variantsField,
    answerField,
    handleAddVariant,
    handleChangeVariant,
    handleSelectAnswer,
    handleDeleteVariant,
  };
};
