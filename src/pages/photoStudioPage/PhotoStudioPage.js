import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useStudioActions from "../../store/studio/useStudioActions";
//Components
import Header from "../../components/header/Header";

const PhotoStudioPage = () => {
  const photoStudio = useSelector(state => state.studio.photoStudio);
  const studioPhotoPackage = useSelector(state => state.studio.studioPhotoPackage);
  const studioFeedbackList = useSelector(state => state.studio.studioFeedbackList);
  const { getPhotoStudio } = useStudioActions();
  const { studioId } = useParams();

  useEffect(() => getPhotoStudio({ studioId }), []);

  return (
    <>
      <Header />
    </>
  );
};

export default PhotoStudioPage;
