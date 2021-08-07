import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useTourActions from "../../store/tour/useTourActions";
//Components
import Header from "../../components/header";
import TourInformation from "../../components/tourInformation";
import PhotoPackage from "../../components/photoPackage/PhotoPackage";

const TourPage = () => {
  const tourInformation = useSelector(state => state.tour.tourInformation);
  const photoPackage = useSelector(state => state.tour.photoPackage);
  const tourManager = useSelector(state => state.tour.tourManager);
  const { getTour } = useTourActions();
  const { tourId } = useParams();

  useEffect(() => getTour({ tourId }), []);

  return (
    <>
      <Header />
      <TourInformation tourInformation={tourInformation} />
      <PhotoPackage photoPackage={photoPackage} />
    </>
  );
};

export default TourPage;
