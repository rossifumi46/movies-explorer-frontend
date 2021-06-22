import React, { useCallback } from "react";
import * as EmailValidator from 'email-validator';
const regex = /^[a-zа-я\-\s]+$/i



export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const customValidation = (values) => {
    return EmailValidator.validate(values?.email) && regex.test(values?.name)
  }

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    const isValid = target.closest("form").checkValidity();
    const customIsValid = customValidation({...values, [name]: value});
    const customErrors = {...errors, [name]: target.validationMessage }
    if (name === 'name') {
      setErrors({...customErrors, [name]: !regex.test(value) ? 'поле name может содержать только латиницу, кириллицу, пробел или дефис' : '',})
    } else if (name === 'email') {
      setErrors({...customErrors, [name]: !EmailValidator.validate(value) ? 'введите email' : ''});
    } else {
      setErrors(customErrors);
    }

    setIsValid(isValid && customIsValid);
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm, setValues };
}