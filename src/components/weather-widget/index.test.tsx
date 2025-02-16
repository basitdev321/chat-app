import { render, screen } from "@testing-library/react";
import WeatherWidget from "@/components/weather-widget";
import { useWeatherQuery } from "@/queries/useWeatherQuery";

// Mocking the `useWeatherQuery` hook
jest.mock("@/queries/useWeatherQuery", () => ({
  useWeatherQuery: jest.fn(),
}));

describe("WeatherWidget Component", () => {
  it("should display a spinner when loading", () => {
    // Mock the hook to return loading state
    (useWeatherQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });

    render(<WeatherWidget />);

    // Check if the Spinner is rendered
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });

  it("should display an error message when there is an error", () => {
    // Mock the hook to return error state
    (useWeatherQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      error: "Unable to fetch weather data",
    });

    render(<WeatherWidget />);

    // Check if error message is rendered
    expect(screen.getByTestId("error-message")).toBeInTheDocument();
  });

  it("should display 'No weather data available' when no weather data is present", () => {
    // Mock the hook to return no data
    (useWeatherQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      error: null,
    });

    render(<WeatherWidget />);

    // Check if the message 'No weather data available' is rendered
    expect(screen.getByText("No weather data available")).toBeInTheDocument();
  });

  it("should display weather data when the data is fetched successfully", async () => {
    const mockWeatherData = {
      main: {
        temp: 298.15, // 25°C
        feels_like: 298.15, // 25°C
        humidity: 60,
      },
      weather: [{ description: "clear sky", icon: "01d" }],
      sys: { country: "US" },
      name: "New York",
      wind: { speed: 5 },
    };

    // Mock the hook to return successful state
    (useWeatherQuery as jest.Mock).mockReturnValue({
      data: mockWeatherData,
      isLoading: false,
      error: null,
    });

    render(<WeatherWidget />);

    // Check if the weather data is displayed correctly
    expect(screen.getByText("25°C")).toBeInTheDocument();
    expect(screen.getByText("clear sky")).toBeInTheDocument();
    expect(screen.getByText("New York, US")).toBeInTheDocument();
    expect(screen.getByText("Feels like: 25°C")).toBeInTheDocument();
    expect(screen.getByText("Wind: 5 m/s")).toBeInTheDocument();
    expect(screen.getByText("Humidity: 60%")).toBeInTheDocument();

    // Check if the weather icon is rendered
    expect(screen.getByAltText("clear sky")).toHaveAttribute(
      "src",
      "http://openweathermap.org/img/wn/01d@2x.png"
    );
  });
});
