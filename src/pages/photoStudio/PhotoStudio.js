import React from "react";
//Components
import Loader from "../../components/loader/Loader";

const PhotoStudio = () => {
  const loading = false;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div>PhotoStudio</div>
        </>
      )}
    </>
  );
};

export default PhotoStudio;
