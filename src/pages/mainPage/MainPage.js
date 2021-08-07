import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useTourActions from "../../store/tour/useTourActions";
//Components
import Header from "../../components/header";
import TourList from "../../components/tourList/TourList";

const MainPage = () => {
  const tourList = useSelector(state => state.tour.tourList);
  const { getTourList } = useTourActions();

  useEffect(() => {
    getTourList();
  }, []);

  return (
    <>
      <Header />
      <TourList tourList={tourList} />
    </>
  );
};

export default MainPage;
