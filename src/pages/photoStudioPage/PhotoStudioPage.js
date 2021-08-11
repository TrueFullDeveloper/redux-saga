import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useStudioActions from "../../store/studio/useStudioActions";

import Header from "../../components/header";
import PhotoStudioInformation from "../../components/photoStudioInformation";
import StudioPhotoPackage from "../../components/studioPhotoPackage";
import FeedbackList from "../../components/feedbackList";
import FeedbackForm from "../../components/feedbackForm/FeedbackForm";

const PhotoStudioPage = () => {
  const photoStudio = useSelector(state => state.studio.photoStudio);
  const studioPhotoPackage = useSelector(state => state.studio.studioPhotoPackage);
  const studioFeedbackList = useSelector(state => state.studio.studioFeedbackList);
  const userFeedback = useSelector(state => state.studio.userFeedback);

  const userId = useSelector(state => state.auth.userId);
  const { getPhotoStudio } = useStudioActions();
  const { studioId } = useParams();

  useEffect(() => getPhotoStudio({ studioId }), []);

  return (
    <>
      <Header />
      <PhotoStudioInformation photoStudio={photoStudio} />
      <StudioPhotoPackage studioPhotoPackage={studioPhotoPackage} />
      <FeedbackForm studioId={studioId} userId={userId} />
      <FeedbackList feedbackList={studioFeedbackList} />
    </>
  );
};

export default PhotoStudioPage;
