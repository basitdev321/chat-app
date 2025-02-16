import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 20px 50px 20px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const LeftColumn = styled.div`
  flex: 1;
  background-color: #ffffff;
  padding: 20px 20px 10px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    order: 1;
  }

  @media (max-width: 600px) {
    max-width: 100%;
    padding: 1rem;
    margin: 20px 0px;
  }
`;

export const RightColumn = styled.div`
  flex: 1;
  background-color: #ffffff;
  padding: 20px 20px 10px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    order: 2;
    margin-bottom: 60px;
  }
`;
