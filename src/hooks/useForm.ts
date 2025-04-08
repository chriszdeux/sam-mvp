import { useCallback, useState } from "react";

// Tipos
type ValidationRule = {
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  message?: string;
};

type FieldValidations<T> = {
  [K in keyof T]?: ValidationRule;
};

type FieldErrors<T> = {
  [K in keyof T]?: string;
};

export const useForm = <T extends Record<string, any>>(
  initialState: T,
  fieldValidations: FieldValidations<T> = {}
) => {
  const [inputValues, setInputValues] = useState<T>(initialState);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors<T>>({});

  const onChange = useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
      active: boolean | null = null,
      uppercase: boolean = false
    ) => {
      const { name, value } = e.target as HTMLInputElement;
      const validation = fieldValidations[name as keyof T];

      const maxLength = validation?.maxLength;
      const minLength = validation?.minLength;
      const message = validation?.message;

      let errorMsg = "";

      if (validation?.required && value.trim() === "") {
        errorMsg = "* Este campo es requerido";
      } else if (minLength && value.length > 0 && value.length < minLength) {
        errorMsg = `* Deben ser al menos ${minLength} caracteres`;
      } else if (value.length >= 0 && value.length < (maxLength ?? Infinity)) {
        errorMsg = message || "";
      }

      setFieldErrors((prev) => ({
        ...prev,
        [name]: errorMsg,
      }));

      const finalValue = maxLength ? value.substring(0, maxLength) : value;

      setInputValues((prev) => ({
        ...prev,
        [name]: uppercase ? finalValue.toUpperCase() : finalValue,
      }));

      if (active) {
        setInputValues((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    },
    [fieldValidations]
  );

  const cleanForm = () => {
    setInputValues(initialState);
    setFieldErrors({});
  };

  const setValues = (values: Partial<T>) => {
    setInputValues((prev) => ({
      ...prev,
      ...values,
    }));
    setFieldErrors({});
  };

  const handleInputAutoComplete = (e: React.FormEvent<HTMLInputElement>, value: string) => {
    e.preventDefault();
    const name = (e.target as HTMLInputElement).name;

    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const runValidates = (optionalFields: (keyof T)[] = []): boolean => {
    const newFieldErrors: FieldErrors<T> = {};

    for (const fieldName in fieldValidations) {
      const rule = fieldValidations[fieldName as keyof T];
      if (rule?.required && !inputValues[fieldName] && !optionalFields.includes(fieldName)) {
        newFieldErrors[fieldName] = "* Este campo es requerido";
      }
    }

    setFieldErrors(newFieldErrors);
    return Object.keys(newFieldErrors).length > 0;
  };

  return {
    inputValues,
    fieldErrors,
    onChange,
    handleInputAutoComplete,
    cleanForm,
    setValues,
    setFieldErrors,
    runValidates,
  };
};
