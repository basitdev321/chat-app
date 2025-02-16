import { FC, useState, useEffect, useRef } from "react";
import {
  Container,
  StickyFooter,
  Input,
  Button,
  MessagesContainer,
  SentMessage,
  ReceivedMessage,
  SenderName,
} from "./index.styles";
import ScrollToBottomComponent from "@/components/design-components/scroll-to-bottom";
import { IMessage } from "@/types";
import { Socket } from "socket.io-client";

interface IMessages {
  messages: IMessage[];
  username: string;
  socket: Socket;
}

const Messages: FC<IMessages> = ({ messages, username, socket }) => {
  const [message, setMessage] = useState("");
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  const handleSendMessage = () => {
    if (message.trim()) {
      socket.emit("message", { message, senderId: username });
      setMessage("");
    }
  };

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages]);

  return (
    <Container>
      <ScrollToBottomComponent>
        <MessagesContainer>
          {messages.map((msg, i) => {
            return msg.senderId === username ? (
              <SentMessage
                key={i}
                ref={i === messages.length - 1 ? lastMessageRef : null}
              >
                {msg.message}
              </SentMessage>
            ) : (
              <ReceivedMessage
                key={i}
                ref={i === messages.length - 1 ? lastMessageRef : null}
              >
                <SenderName>{msg.senderName}:</SenderName>
                {msg.message}
              </ReceivedMessage>
            );
          })}
        </MessagesContainer>
      </ScrollToBottomComponent>
      <StickyFooter>
        <Input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          placeholder="Type a message..."
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </StickyFooter>
    </Container>
  );
};

export default Messages;
