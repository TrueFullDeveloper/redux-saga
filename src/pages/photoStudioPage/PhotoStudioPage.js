import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useStudioActions from "../../store/studio/useStudioActions";
import useFeedbackActions from "../../store/feedback/useFeedbackActions";

import { feedbackEndpoints } from "../../config/feedbackConfig";

import Header from "../../components/header";
import PhotoStudioInformation from "../../components/photoStudioInformation";
import StudioPhotoPackage from "../../components/studioPhotoPackage";
import FeedbackList from "../../components/feedbackList";
import FeedbackForm from "../../components/feedbackForm";
import UserFeedback from "../../components/userFeedback";

const PhotoStudioPage = () => {
  const photoStudio = useSelector(state => state.studio.photoStudio);
  const studioPhotoPackage = useSelector(state => state.studio.studioPhotoPackage);

  const feedbackList = useSelector(state => state.feedback[feedbackEndpoints.STUDIO].list);
  const userFeedback = useSelector(state => state.feedback[feedbackEndpoints.STUDIO].my);

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const { studioId } = useParams();
  const { getPhotoStudio } = useStudioActions();
  const { getFeedbackList } = useFeedbackActions(feedbackEndpoints.STUDIO);

  useEffect(() => {
    getPhotoStudio({ studioId });
    getFeedbackList({ id: studioId });
  }, []);

  return (
    <>
      <Header />
      <PhotoStudioInformation photoStudio={photoStudio} />
      <StudioPhotoPackage studioPhotoPackage={studioPhotoPackage} />
      {!userFeedback && isAuthenticated ? <FeedbackForm id={studioId} /> : null}
      {userFeedback ? <UserFeedback userFeedback={userFeedback} /> : null}
      <FeedbackList feedbackList={feedbackList} />
    </>
  );
};

export default PhotoStudioPage;
