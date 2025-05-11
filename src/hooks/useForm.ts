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
  const [formValues, setFormValues] = useState<T>(initialState);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors<T>>({});

  const onChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
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
      } else if (minLength && value.length >= 0 && value.length < minLength) {
        errorMsg = `* Deben ser al menos ${minLength} caracteres`;
      } else if (value.length >= 0 && value.length < (maxLength ?? Infinity)) {
        errorMsg = message || "";
      }

      setFieldErrors((prev) => ({
        ...prev,
        [name]: errorMsg,
      }));

      const finalValue = maxLength ? value.substring(0, maxLength) : value;

      setFormValues((prev) => ({
        ...prev,
        [name]: uppercase ? finalValue.toUpperCase() : finalValue,
      }));

      if (active) {
        setFormValues((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    },
    [fieldValidations]
  );

  const cleanForm = () => {
    setFormValues(initialState);
    setFieldErrors({});
  };

  const setValues = (values: Partial<T>) => {
    setFormValues((prev) => ({
      ...prev,
      ...values,
    }));
    setFieldErrors({});
  };

  const handleInputAutoComplete = (
    e: React.FormEvent<HTMLInputElement>,
    value: string
  ) => {
    e.preventDefault();
    const name = (e.target as HTMLInputElement).name;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const onChangeCheckbox = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { checked, name } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const runValidates = (optionalFields: (keyof T)[] = []): boolean => {
    const newFieldErrors: FieldErrors<T> = {};
  
    for (const fieldName in fieldValidations) {
      if (optionalFields.includes(fieldName as keyof T)) continue;
  
      const rule = fieldValidations[fieldName as keyof T];
      const value = formValues[fieldName];
  
      if (rule?.required && (!value || value.toString().trim() === "")) {
        newFieldErrors[fieldName] = "* Este campo es requerido";
      } else if (rule?.minLength && value.toString().length < rule.minLength) {
        newFieldErrors[fieldName] = `* Deben ser al menos ${rule.minLength} caracteres`;
      } else if (rule?.maxLength && value.toString().length > rule.maxLength) {
        newFieldErrors[fieldName] = `* Deben ser como máximo ${rule.maxLength} caracteres`;
      }
    }
  
    setFieldErrors(newFieldErrors);
    return Object.keys(newFieldErrors).length > 0;
  };
  

  return {
    formValues,
    fieldErrors,
    onChange,
    handleInputAutoComplete,
    onChangeCheckbox,
    cleanForm,
    setValues,
    setFieldErrors,
    runValidates,
  };
};
