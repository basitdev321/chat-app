import styled from "styled-components";

interface AppButtonProps {
  $variat: "primary" | "info" | "success" | "warning" | "danger" | "form";
}

const variantStyles: Record<AppButtonProps["$variat"], string> = {
  primary: `
    background-color: #007bff;
    color: #ffffff;

    &:hover {
      background-color: #0056b3;
    }
  `,
  info: `
    background-color: #17a2b8;
    color: #ffffff;

    &:hover {
      background-color: #117a8b;
    }
  `,
  success: `
    background-color: #28a745;
    color: #ffffff;

    &:hover {
      background-color: #1e7e34;
    }
  `,
  warning: `
    background-color: #ffc107;
    color: #212529;

    &:hover {
      background-color: #e0a800;
    }
  `,
  danger: `
    background-color:rgb(220, 79, 93);
    color: #ffffff;

    &:hover {
      background-color: #bd2130;
    }
  `,
  form: `
    background-color: #5c6bc0;
    color: #ffffff;

    &:hover {
      background-color: #3e4a89;
    }
  `,
};

export const AppButton = styled.button<AppButtonProps>`
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  ${({ $variat }) => variantStyles[$variat] || variantStyles.primary}
`;
