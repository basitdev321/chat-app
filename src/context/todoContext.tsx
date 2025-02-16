import React, { createContext } from "react";
import { ITodo } from "@/types/index";

export type TodoContextType = [
  ITodo[],
  React.Dispatch<React.SetStateAction<ITodo[]>>
];

export const TodoContextState = createContext<TodoContextType | undefined>([
  [],
  () => {},
]);
