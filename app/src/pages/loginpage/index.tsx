import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "@/components/design-components/input";
import Button from "@/components/design-components/button";
import { useFormValidation } from "@/hooks/useFormValidation";
import FormContainer from "@/components/design-components/form-container";
import { useAuth } from "@/hooks/useAuth";
import { token } from "@/utils";

const Loginpage: React.FC = () => {
  const nivigate = useNavigate();
  const [, setAuth] = useAuth();
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const { errors, validateInputs, handleFieldValidation } = useFormValidation();

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (validateInputs(inputs)) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setAuth(true);
        token.set(inputs.email);
        nivigate("/");
      }, 1000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    handleFieldValidation(e.target.name, e.target.value);
  };

  if (token.get()) {
    nivigate("/");
  }

  return (
    <FormContainer>
      <h2>Login</h2>
      <InputField
        type="email"
        name="email"
        value={inputs.email}
        onChange={handleChange}
        placeholder="Enter your email"
        errorMessage={errors.email}
      />
      <InputField
        type="password"
        name="password"
        value={inputs.password}
        onChange={handleChange}
        placeholder="Enter your password"
        errorMessage={errors.password}
      />
      <Button variat="form" onClick={handleSubmit} isLoading={isLoading}>
        Login
      </Button>
    </FormContainer>
  );
};

export default Loginpage;
