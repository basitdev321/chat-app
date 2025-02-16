import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 2rem;
  background: linear-gradient(
    90deg,
    rgb(110, 94, 254) 0%,
    rgba(73, 63, 252, 1) 100%
  );
  color: #ffffff;

  span {
    font-size: 1.1rem;
    margin-left: 1rem;
  }

  i {
    font-size: 1.5rem;
    color: #ffffff;
  }

  @media (max-width: 600px) {
    padding: 1rem 0rem;
  }
`;
