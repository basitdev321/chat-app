import { FC, Fragment, lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "../design-components/spinner";
// import { useAuth } from "@/hooks/useAuth";

const Header = lazy(() => import("@/components/header"));
// const Header = lazy(() => import("mfe_header/Header"));
const Footer = lazy(() => import("@/components/footer"));

const Layout: FC = () => {
  return (
    <Fragment>
      <Suspense fallback={<Spinner align="center" />}>
        {/* <Header useAuth={useAuth} /> */}
        <Header />
      </Suspense>
      <Outlet />
      <Suspense fallback={<Spinner align="center" />}>
        <Footer />
      </Suspense>
    </Fragment>
  );
};

export default Layout;
