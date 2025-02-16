import { FC, lazy, Suspense } from "react";
import ContextProvider from "@/providers";
import { QueryClient, QueryClientProvider } from "react-query";
import Spinner from "@/components/design-components/spinner";

const AppRoutes = lazy(() => import("./routes"));

const App: FC = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ContextProvider>
        <Suspense fallback={<Spinner align="center" />}>
          <AppRoutes />
        </Suspense>
      </ContextProvider>
    </QueryClientProvider>
  );
};

export default App;
