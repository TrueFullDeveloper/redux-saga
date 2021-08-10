import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useTourManagerActions from "../../store/tourManager/useTourManagerActions";

import Header from "../../components/header";
import TourManagerInformation from "../../components/tourManagerInformation";
import TourList from "../../components/tourList/TourList";

const TourManagerPage = () => {
  const tourManager = useSelector(state => state.tourManager.tourManager);
  const managerTourList = useSelector(state => state.tourManager.managerTourList);
  const { getTourManagerProfile } = useTourManagerActions();
  const { tourManagerId } = useParams();

  useEffect(() => getTourManagerProfile({ tourManagerId }), []);

  return (
    <>
      <Header />
      <TourManagerInformation tourManager={tourManager} />
      <TourList tourList={managerTourList} />
    </>
  );
};

export default TourManagerPage;
