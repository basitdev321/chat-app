import todos from "@/mocks/todo.json";
import { ITodo } from "@/types";

export const getTodos = async () => {
  return new Promise<ITodo[]>((resolve) => {
    setTimeout(() => {
      resolve(todos);
    }, 1000);
  });
};
