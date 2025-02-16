import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  margin: 50px auto;
  padding: 2rem;
  background-color: #f4f4f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }

  @media (max-width: 600px) {
    max-width: 280px;
    padding: 1rem;
  }
`;
