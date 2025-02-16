import styled from "styled-components";

export const TodoCardContainer = styled.div`
  position: relative;
  background: rgb(173, 167, 167);
  border-radius: 8px;
  padding: 3px;
  margin-bottom: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const TodoText = styled.div`
  font-size: 1.2rem;
  min-height: 40px;
  padding: 5px 25px 5px 5px;
  background: rgb(240, 244, 243);
  border-radius: 4px;
  border: 1px solid #ddd;
  cursor: text;
  text-align: start;

  &:empty::before {
    content: "Click to add text...";
    color: black;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const DeleteButton = styled.i`
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  border: none;
  color: #e63946 !important;
  cursor: pointer;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: rgb(187, 36, 36) !important;
  }
`;
