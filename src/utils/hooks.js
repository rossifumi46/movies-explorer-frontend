import React, { useCallback } from "react";
import * as EmailValidator from 'email-validator';
const regex = /[a-zа-я\-\s]+/i



export function useFormWithValidation(defaulValues) {
  const [values, setValues] = React.useState(defaulValues);
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const customValidation = (name, value) => {
    if (name === 'name') {
      const isValid = regex.test(value);
      setErrors({
        ...errors,
        [name]: !isValid ? 'поле name может содержать только латиницу, кириллицу, пробел или дефис' : '',
      });
      setIsValid(isValid);
    }
    if (name === 'email') {
      const isValid = EmailValidator.validate(value)
      setErrors({...errors, [name]: !isValid ? 'введите email' : ''})
      setIsValid(isValid);
    }
  }

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setIsValid(target.closest("form").checkValidity());
    setErrors({...errors, [name]: target.validationMessage });
    customValidation(name, value);
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}