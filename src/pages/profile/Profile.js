import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useProfileActions from "../../store/profile/useProfileActions";
//Components
import Header from "../../components/header";

const Profile = () => {
  const profile = useSelector(state => state.profile);
  const userId = useSelector(state => state.auth.userId);
  const { getProfile } = useProfileActions();

  useEffect(() => getProfile({ userId }), []);

  return (
    <>
      <Header />
    </>
  );
};

export default Profile;
