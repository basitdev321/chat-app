import React, { useState } from "react";
import { TodoCardContainer, DeleteButton, TodoText } from "./index.styles";
import { ITodoCardProps } from "@/types";

const TodoCard: React.FC<ITodoCardProps> = ({
  onDelete,
  onChange,
  initialText,
}) => {
  const [text, setText] = useState(initialText);

  const handleChange = (e: React.FocusEvent<HTMLDivElement>) => {
    const newText = e.target.innerText;
    setText(newText);
    onChange(newText);
  };

  return (
    <TodoCardContainer>
      <DeleteButton
        data-testid="delete-todo"
        className="fa fa-trash"
        onClick={onDelete}
      />
      <TodoText
        contentEditable
        suppressContentEditableWarning
        onBlur={handleChange}
        dangerouslySetInnerHTML={{ __html: text || "" }}
      />
    </TodoCardContainer>
  );
};

export default TodoCard;
