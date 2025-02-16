import { FC } from "react";
import { Form } from "./index.styles";
import { IFormContainerProps } from "@/types";
const FormContainer: FC<IFormContainerProps> = ({ children }) => {
  return <Form>{children}</Form>;
};

export default FormContainer;
