import React, { Suspense, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { getRoutes } from "./pages/routes";
import { useDispatch } from "react-redux";
//Components
import Loader from "./components/loader";
import Header from "./components/header";
import { login } from "./store/auth/authActions";

function App() {
  const dispatch = useDispatch();

  const isAuthenticated = true;
  const loading = false;
  const routes = getRoutes(isAuthenticated);

  useEffect(() => {
    console.log("From App");
    dispatch(login({ email: "email", password: "PAssword" }));
  }, []);

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
