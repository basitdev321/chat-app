import { useContext } from "react";
import { TodoContextState, TodoContextType } from "@/context/todoContext";

export const useTodo = (): TodoContextType => {
  const context = useContext(TodoContextState);
  if (!context) {
    throw new Error("useTodo must be used within a ContextProvider");
  }
  return context;
};
