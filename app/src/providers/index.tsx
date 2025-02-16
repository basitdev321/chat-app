import { FC, PropsWithChildren } from "react";
import AuthContextProvider from "./authProvider";
import TodoContextProvider from "./todoProvider";

export const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AuthContextProvider>
      <TodoContextProvider>{children}</TodoContextProvider>
    </AuthContextProvider>
  );
};

export default ContextProvider;
