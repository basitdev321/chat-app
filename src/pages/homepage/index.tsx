import React from "react";
import { PageContainer, LeftColumn, RightColumn } from "./index.styles";
import TodoList from "@/components/todo-list";
import WeatherWidget from "@/components/weather-widget";
import JokeWidget from "@/components/joke-widget";
import ChatWidget from "@/components/chat";

const MemoizedTodoList = React.memo(TodoList);
const MemoizedWeatherWidget = React.memo(WeatherWidget);
const MemoizedJokeWidget = React.memo(JokeWidget);
const MemoizedChatWidget = React.memo(ChatWidget);
const Homepage: React.FC = () => {
  return (
    <>
      <PageContainer style={{ marginBottom: "20px" }}>
        <MemoizedChatWidget />
      </PageContainer>
      <PageContainer style={{ marginBottom: "100px" }}>
        <LeftColumn data-testid="left-column">
          <MemoizedTodoList />
        </LeftColumn>
        <RightColumn data-testid="right-column">
          <MemoizedWeatherWidget />
          <MemoizedJokeWidget />
        </RightColumn>
      </PageContainer>
    </>
  );
};

export default Homepage;
