import { FC, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "@/routes/protected-route";
import Layout from "@/components/layout";
import Spinner from "@/components/design-components/spinner";

const Homepage = lazy(() => import("@/pages/homepage"));
const Aboutpage = lazy(() => import("@/pages/aboutpage"));
const Loginpage = lazy(() => import("@/pages/loginpage"));

const AppRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            index
            element={
              <Suspense fallback={<Spinner align="center" />}>
                <ProtectedRoute>
                  <Homepage />
                </ProtectedRoute>
              </Suspense>
            }
          />
          <Route
            path="/about"
            index
            element={
              <Suspense fallback={<Spinner align="center" />}>
                <ProtectedRoute>
                  <Aboutpage />
                </ProtectedRoute>
              </Suspense>
            }
          />
          <Route
            path="/login"
            index
            element={
              <Suspense fallback={<Spinner align="center" />}>
                <Loginpage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
