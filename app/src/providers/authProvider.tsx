import React, { useState, useEffect } from "react";
import { AuthContextState } from "@/context/authContext";
import { token } from "@/utils";

const ContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (token.get()) {
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthContextState.Provider value={[isAuth, setIsAuth]}>
      {children}
    </AuthContextState.Provider>
  );
};

export default ContextProvider;
