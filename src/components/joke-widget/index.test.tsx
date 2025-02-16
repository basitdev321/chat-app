import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import JokeWidget from "@/components/joke-widget";
import { useJokeAPIQuery } from "@/queries/useJokeAPIQuery";

// Mocking the `useJokeAPIQuery` hook
jest.mock("@/queries/useJokeAPIQuery", () => ({
  useJokeAPIQuery: jest.fn(),
}));

describe("JokeWidget Component", () => {
  it("should display a spinner when loading", () => {
    // Mock the hook to return loading state
    (useJokeAPIQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      isError: false,
      refetch: jest.fn(),
    });

    render(<JokeWidget />);

    // Check if the Spinner is rendered
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });

  it("should display an error message when there is an error", () => {
    // Mock the hook to return error state
    (useJokeAPIQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      isError: "Error",
      refetch: jest.fn(),
    });

    render(<JokeWidget />);

    // Check if error message is rendered
    expect(screen.getByText("Error")).toBeInTheDocument();
  });

  it("should display the joke when the data is fetched successfully", () => {
    // Mock the hook to return successful state
    (useJokeAPIQuery as jest.Mock).mockReturnValue({
      data: {
        type: "single",
        joke: "Why don’t skeletons fight each other? They don’t have the guts.",
      },
      isLoading: false,
      isError: false,
      refetch: jest.fn(),
    });

    render(<JokeWidget />);

    // Check if the joke is displayed
    expect(
      screen.getByText(
        "Why don’t skeletons fight each other? They don’t have the guts."
      )
    ).toBeInTheDocument();
  });

  it("should call refetch when 'Get Another Joke' button is clicked", async () => {
    const mockRefetch = jest.fn();

    // Mock the hook to return successful state
    (useJokeAPIQuery as jest.Mock).mockReturnValue({
      data: {
        type: "single",
        joke: "Why don’t skeletons fight each other? They don’t have the guts.",
      },
      isLoading: false,
      isError: false,
      refetch: mockRefetch,
    });

    render(<JokeWidget />);

    // Click the "Get Another Joke" button
    fireEvent.click(screen.getByText("Get Another Joke"));

    // Ensure refetch is called
    await waitFor(() => {
      expect(mockRefetch).toHaveBeenCalled();
    });
  });
});
