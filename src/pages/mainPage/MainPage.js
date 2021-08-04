import React from "react";
import Loader from "../../components/loader/Loader";

const MainPage = () => {
  const loading = false;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div>MainPage</div>
        </>
      )}
    </>
  );
};

export default MainPage;
