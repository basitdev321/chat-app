import styled from "styled-components";

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #2193b0, #6dd5ed);
  color: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: auto;
  font-family: Arial, Helvetica, sans-serif;
`;

export const WeatherIcon = styled.img`
  width: 80px;
  height: 80px;
`;

export const Temperature = styled.h1`
  font-size: 2.5rem;
  margin: 0 0;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  margin: 0 0;
  text-transform: capitalize;
`;

export const Location = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
  font-weight: bold;
`;

export const AdditionalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;

  p {
    margin: 0;
    font-size: 0.9rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;
