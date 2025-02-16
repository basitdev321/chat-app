import React, { useState } from "react";
import {
  InputWrapper,
  Input,
  ToggleButton,
  ErrorMessage,
} from "./index.styles";
import { InputFieldProps } from "@/types";

const InputField: React.FC<InputFieldProps> = ({
  type,
  value,
  onChange,
  errorMessage,
  placeholder,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordType = type === "password";
  const inputType = isPasswordType && showPassword ? "text" : type;

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <InputWrapper>
        <Input
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...props}
        />
        {isPasswordType && (
          <ToggleButton
            type="button"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? "🙈" : "👁️"}
          </ToggleButton>
        )}
      </InputWrapper>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
};

export default InputField;
