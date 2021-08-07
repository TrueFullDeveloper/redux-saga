import React from "react";
import { useSelector } from "react-redux";
//Components
import Header from "../../components/header";

const TourPage = () => {
  const tourInformation = useSelector(state => state.tour.tourInformation);
  const photoPackage = useSelector(state => state.tour.photoPackage);
  const tourManager = useSelector(state => state.tour.tourManager);

  return (
    <>
      <Header />
    </>
  );
};

export default TourPage;
