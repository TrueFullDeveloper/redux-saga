import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useTourActions from "../../store/tour/useTourActions";

import Header from "../../components/header";
import TourInformation from "../../components/tourInformation";
import PhotoPackage from "../../components/photoPackage/PhotoPackage";
import TourManager from "../../components/tourManager/TourManager";
import FeedbackList from "../../components/feedbackList";
import FeedbackForm from "../../components/feedbackForm/FeedbackForm";
import UserFeedback from "../../components/userFeedback";

const TourPage = () => {
  const tourInformation = useSelector(state => state.tour.tourInformation);
  const photoPackage = useSelector(state => state.tour.photoPackage);
  const tourManager = useSelector(state => state.tour.tourManager);
  const tourFeedbackList = useSelector(state => state.tour.tourFeedbackList);
  const userFeedback = useSelector(state => state.tour.userFeedback);

  const userId = useSelector(state => state.auth.userId);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const { getTour } = useTourActions();
  const { tourId } = useParams();

  useEffect(() => getTour({ tourId }), []);

  return (
    <>
      <Header />
      <TourInformation tourInformation={tourInformation} />
      <PhotoPackage photoPackage={photoPackage} />
      <TourManager tourManager={tourManager} />
      {!userFeedback && isAuthenticated ? <FeedbackForm pageId={tourId} userId={userId} /> : null}
      {userFeedback ? <UserFeedback userFeedback={userFeedback} /> : null}
      <FeedbackList feedbackList={tourFeedbackList} />
    </>
  );
};

export default TourPage;
