import React from "react";
//Components
import Loader from "../../components/loader/Loader";

const Photographer = () => {
  const loading = false;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div>Photographer</div>
        </>
      )}
    </>
  );
};

export default Photographer;
