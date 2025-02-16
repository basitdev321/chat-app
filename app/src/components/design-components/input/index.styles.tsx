import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 0.8rem;
  margin: 0.8rem 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
  padding-right: 2.5rem;

  &:focus {
    border-color: #5c6bc0;
    outline: none;
  }
`;

export const ToggleButton = styled.button`
  position: absolute;
  right: 0.8rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: #5c6bc0;

  &:focus {
    outline: none;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;
