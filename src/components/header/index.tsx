import React, { lazy, Suspense } from "react";
import { HeaderContainer, LogoAndLinks, NavLinks } from "./index.styles";
import Link from "@/components/design-components/link";
import Logo from "@/components/design-components/logo";
import { useAuth } from "@/hooks/useAuth";
import Spinner from "@/components/design-components/spinner";

const UserProfile = lazy(() => import("@/components/user-profile"));

const Header: React.FC = () => {
  const [isAuth, setAuth] = useAuth();

  return (
    <HeaderContainer>
      <LogoAndLinks>
        <Logo />
        {isAuth && (
          <NavLinks>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </NavLinks>
        )}
      </LogoAndLinks>
      {isAuth && (
        <Suspense fallback={<Spinner />}>
          {<UserProfile setAuth={setAuth} isAuth={isAuth} />}
        </Suspense>
      )}
    </HeaderContainer>
  );
};

export default Header;
