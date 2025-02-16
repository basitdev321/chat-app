import { render, act } from "@testing-library/react";
import Homepage from "./index";

jest.mock("@/components/todo-list", () => () => (
  <div data-testid="todo-list">Todo List</div>
));
jest.mock("@/components/weather-widget", () => () => (
  <div data-testid="weather-widget">Weather Widget</div>
));
jest.mock("@/components/joke-widget", () => () => (
  <div data-testid="joke-widget">Joke Widget</div>
));

describe("Homepage Component", () => {
  it("renders the TodoList component", async () => {
    const { getByTestId } = await act(async () => render(<Homepage />));

    const todoList = getByTestId("todo-list");
    expect(todoList).toBeInTheDocument();
    expect(todoList).toHaveTextContent("Todo List");
  });

  it("renders the WeatherWidget component", async () => {
    const { getByTestId } = await act(async () => render(<Homepage />));

    const weatherWidget = getByTestId("weather-widget");
    expect(weatherWidget).toBeInTheDocument();
    expect(weatherWidget).toHaveTextContent("Weather Widget");
  });

  it("renders the JokeWidget component", async () => {
    const { getByTestId } = await act(async () => render(<Homepage />));

    const jokeWidget = getByTestId("joke-widget");
    expect(jokeWidget).toBeInTheDocument();
    expect(jokeWidget).toHaveTextContent("Joke Widget");
  });

  it("renders LeftColumn and RightColumn", async () => {
    const { getByTestId } = await act(async () => render(<Homepage />));

    const leftColumn = getByTestId("left-column");
    const rightColumn = getByTestId("right-column");

    expect(leftColumn).toBeInTheDocument();
    expect(rightColumn).toBeInTheDocument();
  });
});
