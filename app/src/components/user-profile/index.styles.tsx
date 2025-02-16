import styled from "styled-components";

export const UserProfileWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

export const UserIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #888;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

export const Popup = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background-color: #fff;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  width: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  cursor: default;
`;

export const UserData = styled.div`
  font-size: 15px;
`;

export const LogoutButton = styled.i`
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  border: none;
  color: #e63946;
  cursor: pointer;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #d93c3c;
  }
`;
