import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useTourManagerActions from "../../store/tourManager/useTourManagerActions";
//Components
import Header from "../../components/header";

const TourManagerPage = () => {
  const tourManager = useSelector(state => state.tourManager.tourManager);
  const managerTourList = useSelector(state => state.tourManager.managerTourList);
  const { getTourManagerProfile } = useTourManagerActions();
  const { tourManagerId } = useParams();

  useEffect(() => getTourManagerProfile({ tourManagerId }), []);

  return (
    <>
      <Header />
      <div>Photographer</div>
    </>
  );
};

export default TourManagerPage;
