import { render, fireEvent, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Loginpage from "./index";
import { useAuth } from "@/hooks/useAuth";
import { token } from "@/utils";
import { InputFieldProps, IButtonProps } from "@/types";

jest.mock(
  "@/components/design-components/input",
  () => (props: InputFieldProps) =>
    (
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        data-testid={`input-${props.name}`}
      />
    )
);

jest.mock(
  "@/components/design-components/button",
  () => (props: IButtonProps) =>
    (
      <button
        onClick={props.onClick}
        disabled={props.isLoading}
        data-testid="login-button"
      >
        {props.isLoading ? "Loading..." : props.children}
      </button>
    )
);
const mockSetAuth = jest.fn();

jest.mock("@/hooks/useAuth", () => ({
  useAuth: jest.fn(() => [false, mockSetAuth]),
}));

jest.mock("@/hooks/useFormValidation", () => ({
  useFormValidation: jest.fn(() => ({
    errors: { email: "", password: "" },
    validateInputs: jest.fn(() => true),
    handleFieldValidation: jest.fn(),
  })),
}));

jest.mock("@/utils", () => ({
  token: {
    get: jest.fn(),
    set: jest.fn(),
  },
}));

jest.useFakeTimers();

describe("Loginpage Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useAuth as jest.Mock).mockReturnValue([false, mockSetAuth]);
  });

  it("renders input fields and a button", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Loginpage />
      </MemoryRouter>
    );

    expect(getByTestId("input-email")).toBeInTheDocument();
    expect(getByTestId("input-password")).toBeInTheDocument();
    expect(getByTestId("login-button")).toBeInTheDocument();
  });

  it("updates input fields on change", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Loginpage />
      </MemoryRouter>
    );

    const emailInput = getByTestId("input-email") as HTMLInputElement;
    const passwordInput = getByTestId("input-password") as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("password123");
  });

  it("calls handleSubmit on button click", async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Loginpage />
      </MemoryRouter>
    );

    const emailInput = getByTestId("input-email") as HTMLInputElement;
    const passwordInput = getByTestId("input-password") as HTMLInputElement;

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "test@example.com" } });
      fireEvent.change(passwordInput, { target: { value: "Password@123" } });
    });

    const loginButton = getByTestId("login-button");

    await act(async () => {
      fireEvent.click(loginButton);
    });

    act(() => {
      jest.runAllTimers();
    });

    expect(mockSetAuth).toHaveBeenCalledWith(true);
    expect(token.set).toHaveBeenCalledWith("test@example.com");
  });

  it("displays loading state while submitting", async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Loginpage />
      </MemoryRouter>
    );

    const loginButton = getByTestId("login-button");

    await act(async () => {
      fireEvent.click(loginButton);
    });

    expect(loginButton).toHaveTextContent("Loading...");
  });
});
