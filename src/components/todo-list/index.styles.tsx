import styled from "styled-components";

export const TodoContainer = styled.div`
  height: 75vh;
  overflow-y: scroll;

  h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.5rem;
    @media (max-width: 600px) {
      font-size: 1.2rem;
    }
  }

  i {
    font-size: 1.2rem;
    color: #2c3e50;
    margin-bottom: 10px;
    cursor: pointer;
    @media (max-width: 600px) {
      font-size: 1.2rem;
    }
  }
`;
