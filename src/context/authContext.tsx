import React, { createContext } from "react";

export type AuthContextType = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
];

export const AuthContextState = createContext<AuthContextType | undefined>(
  undefined
);
