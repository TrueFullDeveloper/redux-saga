import React, { Suspense, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useLoader } from "./utils/hooks/useLoader";
import useAuthActions from "./store/auth/useAuthActions";

import Loader from "./components/loader";
import Routes from "./components/routes";

function App() {
  const { loading } = useLoader();
  const { doTokenUpdate } = useAuthActions();

  useEffect(() => {
    doTokenUpdate();
  }, []);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Suspense>
      {loading ? <Loader /> : null}
    </>
  );
}

export default App;
