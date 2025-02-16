import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Layout from "@/components/layout";

// Mocking Header and Footer components to avoid lazy loading during tests
jest.mock("@/components/header", () => () => (
  <div data-testid="header">Header</div>
));
jest.mock("@/components/footer", () => () => (
  <div data-testid="footer">Footer</div>
));

describe("Layout Component", () => {
  it("should render Header and Footer after lazy loading", async () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    // Wait for lazy-loaded components (Header and Footer) to appear
    await waitFor(() =>
      expect(screen.getByTestId("header")).toBeInTheDocument()
    );
    await waitFor(() =>
      expect(screen.getByTestId("footer")).toBeInTheDocument()
    );

    // Check if Header and Footer are rendered correctly
    expect(screen.getByTestId("header")).toHaveTextContent("Header");
    expect(screen.getByTestId("footer")).toHaveTextContent("Footer");
  });

  it("should render Outlet for nested routes", () => {
    // Set up routes with an Outlet to verify it is rendered correctly
    render(
      <MemoryRouter initialEntries={["/some-page"]}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/some-page"
              element={<div data-testid="nested-page" />}
            />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    // Check if Outlet renders the nested route's content (which will render `div[data-testid="nested-page"]`)
    expect(screen.getByTestId("nested-page")).toBeInTheDocument();
  });
});
