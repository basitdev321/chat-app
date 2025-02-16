import styled from "styled-components";

const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
`;

const StatusIndicator = styled.span<{ $status: string }>`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ $status }) =>
    $status === "online" ? "#4caf50" : "#f44336"};
  box-shadow: 0 0 6px
    ${({ $status }) => ($status === "online" ? "#4caf50" : "#f44336")};
  margin-right: 8px;
`;

const LastSeenText = styled.span`
  font-size: 12px;
  color: #888;
  margin-left: 4px;
`;

export { StatusContainer, StatusIndicator, LastSeenText };
