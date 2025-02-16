import styled from "styled-components";

export const JokeWidgetWrapper = styled.div`
  background-color: rgb(240, 244, 243);
  padding: 20px;
  margin: 20px auto;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 500px;
  height: 255px;
  max-width: 100%;
  text-align: center;
  font-family: "Arial", sans-serif;

  @media (max-width: 600px) {
    width: 100%;
    padding: 10px 0px;
  }
`;

export const JokeText = styled.p`
  font-size: 16px;
  color: #333;
  margin: 15px 0;
`;
