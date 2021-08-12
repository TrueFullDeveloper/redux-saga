import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useUserProfileActions from "../../store/userProfile/useUserProfileActions";
import useFeedbackActions from "../../store/feedback/useFeedbackActions";

import { feedbackEndpoints } from "../../config/feedbackConfig";

import Header from "../../components/header";
import FeedbackList from "../../components/feedbackList";
import UserInformation from "../../components/userInformation";

const UserPage = () => {
  const userProfile = useSelector(state => state.userProfile.userProfile);
  const feedbackList = useSelector(state => state.feedback[feedbackEndpoints.USER].list);

  const { userId } = useParams();
  const { getUserProfile } = useUserProfileActions();
  const { getFeedbackList } = useFeedbackActions(feedbackEndpoints.USER);

  useEffect(() => {
    getUserProfile({ userId });
    getFeedbackList({ id: userId });
  }, []);

  return (
    <>
      <Header />
      <UserInformation userProfile={userProfile} />
      <FeedbackList feedbackList={feedbackList} />
    </>
  );
};

export default UserPage;
