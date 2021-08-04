import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { getRoutes } from "./pages/routes";
//Components
import Loader from "./components/loader";
import Header from "./components/header";

function App() {
  const isAuthenticated = true;
  const loading = false;

  const routes = getRoutes(isAuthenticated);

  return loading ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        {isAuthenticated && <Header />} {routes}
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
