import React, { useEffect } from "react";
import { TodoContainer } from "./index.styles";
import { useTodo } from "@/hooks/useTodo";
import TodoCard from "@/components/design-components/todo-card";
import { useTodoQuery } from "@/queries/useTodoQuery";
import Spinner from "../design-components/spinner";

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useTodo();

  const { data, isLoading } = useTodoQuery(true);

  const handleAddTodo = () => {
    setTodos((prevTodos) => [{ id: Date.now(), text: "" }, ...prevTodos]);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleTextChange = (id: number, newText: string) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  useEffect(() => {
    if (data) {
      setTodos(data);
    }
  }, [data, setTodos]);

  return (
    <TodoContainer>
      <h1>Todo List</h1>
      <i
        data-testid="add-todo"
        className="fa fa-plus"
        onClick={handleAddTodo}
      ></i>
      {isLoading ? (
        <div>
          <Spinner color="black" />
        </div>
      ) : todos?.length > 0 ? (
        todos?.map((todo) => (
          <TodoCard
            key={todo.id}
            onDelete={() => handleDeleteTodo(todo.id)}
            onChange={(newText: string) => handleTextChange(todo.id, newText)}
            initialText={todo.text}
          />
        ))
      ) : (
        <p>Click on the plus icon to add a new todo</p>
      )}
    </TodoContainer>
  );
};

export default TodoList;
