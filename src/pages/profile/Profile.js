import React from "react";
import Loader from "../../components/loader/Loader";

const Profile = () => {
  const loading = false;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div>Profile</div>
        </>
      )}
    </>
  );
};

export default Profile;
