import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useProfileActions from "../../store/profile/useProfileActions";
//Components
import Header from "../../components/header";
import ProfileInformation from "../../components/profileInformation";

const Profile = () => {
  const profile = useSelector(state => state.profile);
  const { getProfile } = useProfileActions();

  useEffect(() => getProfile(), []);

  return (
    <>
      <Header />
      <ProfileInformation profile={profile} />
    </>
  );
};

export default Profile;
