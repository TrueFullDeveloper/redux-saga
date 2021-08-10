import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useUserProfileActions from "../../store/userProfile/useUserProfileActions";

import Header from "../../components/header";
import FeedbackList from "../../components/feedbackList";
import UserInformation from "../../components/userInformation";

const UserPage = () => {
  const userProfile = useSelector(state => state.userProfile.userProfile);
  const userFeedbackList = useSelector(state => state.userProfile.userFeedbackList);
  const { getUserProfile } = useUserProfileActions();
  const { userId } = useParams();

  useEffect(() => getUserProfile({ userId }), []);

  return (
    <>
      <Header />
      <UserInformation userProfile={userProfile} />
      <FeedbackList feedbackList={userFeedbackList} />
    </>
  );
};

export default UserPage;
