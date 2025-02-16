import React, { useState } from "react";
import { TodoContextState } from "@/context/todoContext";
import todoMockData from "@/mocks/todo.json";

const ContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [todos, setTodos] = useState(todoMockData);

  return (
    <TodoContextState.Provider value={[todos, setTodos]}>
      {children}
    </TodoContextState.Provider>
  );
};

export default ContextProvider;
