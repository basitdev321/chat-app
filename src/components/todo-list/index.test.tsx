import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TodoCard from "@/components/design-components/todo-card";
import { useTodoQuery } from "@/queries/useTodoQuery";
import { useTodo } from "@/hooks/useTodo";
import TodoList from "@/components/todo-list";

// Mock props to simulate component behavior
const mockOnDelete = jest.fn();
const mockOnChange = jest.fn();

jest.mock("@/queries/useTodoQuery", () => ({
  useTodoQuery: jest.fn(),
}));

jest.mock("@/hooks/useTodo", () => ({
  useTodo: jest.fn(),
}));

describe("TodoCard Component", () => {
  const initialText = "Test Todo";
  const mockSetTodos = jest.fn();

  beforeEach(() => {
    mockSetTodos.mockClear();
    mockOnDelete.mockClear();
    mockOnChange.mockClear();
  });

  it("should render initial text", () => {
    render(
      <TodoCard
        onDelete={mockOnDelete}
        onChange={mockOnChange}
        initialText={initialText}
      />
    );

    // Check if the initial text is rendered
    expect(screen.getByText(initialText)).toBeInTheDocument();
  });

  it("should display a message when there are no todos", () => {
    (useTodoQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
    });

    (useTodo as jest.Mock).mockReturnValue([[], mockSetTodos]);

    render(<TodoList />);

    // Check if the message is displayed
    expect(
      screen.getByText("Click on the plus icon to add a new todo")
    ).toBeInTheDocument();
  });

  it("should add a new todo when the plus icon is clicked", async () => {
    (useTodoQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
    });

    (useTodo as jest.Mock).mockReturnValue([[], mockSetTodos]);

    render(<TodoList />);

    // Click the plus icon to add a new todo
    fireEvent.click(screen.getByTestId("add-todo"));

    // Check if the setTodos function is called to add a new todo
    await waitFor(() => expect(mockSetTodos).toHaveBeenCalled());
  });

  it("should call onDelete when delete button is clicked", () => {
    render(
      <TodoCard
        onDelete={mockOnDelete}
        onChange={mockOnChange}
        initialText={initialText}
      />
    );

    // Click the delete button
    fireEvent.click(screen.getByTestId("delete-todo"));

    // Check if the onDelete function is called
    expect(mockOnDelete).toHaveBeenCalledTimes(1);
  });

  it("should call onChange when text is edited", () => {
    render(
      <TodoCard
        onDelete={mockOnDelete}
        onChange={mockOnChange}
        initialText={initialText}
      />
    );

    const editableDiv = screen.getByText(initialText);

    // Simulate text change by the user
    fireEvent.blur(editableDiv, { target: { innerText: "Updated Todo" } });

    // Check if the onChange function is called with the updated text
    expect(mockOnChange).toHaveBeenCalledWith("Updated Todo");
  });

  it("should update the text when content is edited", () => {
    render(
      <TodoCard
        onDelete={mockOnDelete}
        onChange={mockOnChange}
        initialText={initialText}
      />
    );

    const editableDiv = screen.getByText(initialText);

    // Simulate text change by the user
    fireEvent.blur(editableDiv, { target: { innerText: "Updated Todo" } });

    // Check if the text content is updated correctly
    expect(editableDiv).toHaveTextContent("Updated Todo");
  });
});
