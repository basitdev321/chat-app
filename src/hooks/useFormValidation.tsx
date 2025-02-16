import { useState } from "react";

interface IFormProps {
  [key: string]: string;
  email: string;
  password: string;
}
const initialState: IFormProps = { email: "", password: "" };
export const useFormValidation = () => {
  const [errors, setErrors] = useState<IFormProps>(initialState);

  const validateEmail = (email: string): string => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email) return "Email is required.";
    if (!regex.test(email)) return "Please enter a valid email address.";
    return "";
  };

  const validatePassword = (password: string): string => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password) return "Password is required.";
    if (!regex.test(password))
      return "Password must be at least 8 characters, include a lowercase, uppercase, number, and special character.";
    return "";
  };

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "email":
        return validateEmail(value);
      case "password":
        return validatePassword(value);
      default:
        return "";
    }
  };

  const validateInputs = (inputs: IFormProps): boolean => {
    let isValid = true;
    const newErrors: IFormProps = { ...initialState };

    for (const [name, value] of Object.entries(inputs)) {
      const error = validateField(name, value);
      newErrors[name] = error;
      isValid = isValid && !error;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleFieldValidation = (name: string, value: string) => {
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  return {
    errors,
    validateInputs,
    handleFieldValidation,
  };
};
