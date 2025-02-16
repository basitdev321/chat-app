import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
`;

const StickyFooter = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 8px;
  border-top: 1px solid #ccc;
  background-color: white;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const SentMessage = styled.div`
  align-self: flex-end;
  max-width: 60%;
  margin: 5px 0;
  padding: 10px;
  background-color: #85c1e9;
  color: #fff;
  border-radius: 10px 10px 0 10px;
  word-wrap: break-word;
  font-size: 14px;
`;

const ReceivedMessage = styled.div`
  align-self: flex-start;
  max-width: 60%;
  margin: 5px 0;
  padding: 10px;
  background-color: rgb(198, 221, 220);
  color: #000;
  border-radius: 10px 10px 10px 0;
  word-wrap: break-word;
  font-size: 14px;
`;

const SenderName = styled.span`
  display: block;
  color: blue;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 12px;
`;

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: inherit;
  overflow-y: auto;
  background-color: #f0f0f0;
`;

export {
  Container,
  StickyFooter,
  Input,
  Button,
  SentMessage,
  ReceivedMessage,
  SenderName,
  MessagesContainer,
};
