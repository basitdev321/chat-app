import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AppLink = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  font-size: 1.1rem;
  transition: color 0.2s;

  &:hover {
    color: rgb(10, 16, 31);
  }

  &.active {
    color: #ffffff;
    border-bottom: 2px solid #ffffff;
  }
`;
