import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useStudioActions from "../../store/studio/useStudioActions";
import Header from "../../components/header/Header";
import PhotoStudioList from "../../components/photoStudioList/PhotoStudioList";

const PhotoStudioCatalog = () => {
  const photoStudioList = useSelector(state => state.studio.photoStudioList);
  const { getPhotoStudioList } = useStudioActions();

  useEffect(() => getPhotoStudioList(), []);

  return (
    <>
      <Header />
      <PhotoStudioList photoStudioList={photoStudioList} />
    </>
  );
};

export default PhotoStudioCatalog;
