import { useContext } from "react";
import { AuthContextState, AuthContextType } from "@/context/authContext";

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContextState);
  if (!context) {
    throw new Error("useAuth must be used within a ContextProvider");
  }
  return context;
};
