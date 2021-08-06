import React, { Suspense, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { getRoutes } from "./pages/routes";
import { useSelector } from "react-redux";
import useAuthActions from "./store/auth/useAuthActions";
//Components
import Loader from "./components/loader";

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const loading = useSelector(state => state.loader.loading);

  const { doTokenUpdate } = useAuthActions();
  const routes = getRoutes(isAuthenticated);

  useEffect(() => {
    doTokenUpdate();
  }, []);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>{routes}</BrowserRouter>
      </Suspense>
      {loading ? <Loader /> : null}
    </>
  );
}

export default App;
