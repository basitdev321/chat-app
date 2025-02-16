import { render, waitFor, act } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";

// Mock Spinner and AppRoutes
jest.mock("./routes", () => () => <div>LazyLoadedRoutes</div>);
jest.mock("@/components/design-components/spinner", () => () => (
  <div>LoadingSpinner</div>
));

describe("App Component", () => {
  it("renders the AppRoutes component", async () => {
    const { getByText } = await act(async () => render(<App />));
    // Wait for the lazy-loaded component
    await waitFor(() => {
      expect(getByText(/LazyLoadedRoutes/i)).toBeInTheDocument();
    });
  });

  it("ensures QueryClientProvider is functioning", async () => {
    const queryClient = new QueryClient();
    const { getByText } = await act(async () =>
      render(
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      )
    );
    expect(getByText(/LazyLoadedRoutes/i)).toBeInTheDocument();
  });
});
