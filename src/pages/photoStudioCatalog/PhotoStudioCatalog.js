import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useStudioActions from "../../store/studio/useStudioActions";
//Components
import Header from "../../components/header/Header";

const PhotoStudioCatalog = () => {
  const photoStudioList = useSelector(state => state.studio.photoStudioList);
  const { getPhotoStudioList } = useStudioActions();

  useEffect(() => getPhotoStudioList(), []);

  return (
    <>
      <Header />
    </>
  );
};

export default PhotoStudioCatalog;
