import React from "react";
import { Navigate } from "react-router-dom";
import { token } from "@/utils";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return token.get() ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
