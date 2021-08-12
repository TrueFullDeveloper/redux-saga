import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useTourActions from "../../store/tour/useTourActions";
import useFeedbackActions from "../../store/feedback/useFeedbackActions";

import { feedbackEndpoints } from "../../config/feedbackConfig";

import Header from "../../components/header";
import TourInformation from "../../components/tourInformation";
import PhotoPackage from "../../components/photoPackage";
import TourManager from "../../components/tourManager";
import FeedbackList from "../../components/feedbackList";
import FeedbackForm from "../../components/feedbackForm";
import UserFeedback from "../../components/userFeedback";

const TourPage = () => {
  const tourInformation = useSelector(state => state.tour.tourInformation);
  const photoPackage = useSelector(state => state.tour.photoPackage);
  const tourManager = useSelector(state => state.tour.tourManager);

  const feedbackList = useSelector(state => state.feedback[feedbackEndpoints.TOUR].list);
  const userFeedback = useSelector(state => state.feedback[feedbackEndpoints.TOUR].my);

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const { tourId } = useParams();
  const { getTour } = useTourActions();
  const { getFeedbackList } = useFeedbackActions(feedbackEndpoints.TOUR);

  useEffect(() => {
    getTour({ tourId });
    getFeedbackList(tourId);
  }, []);

  return (
    <>
      <Header />
      <TourInformation tourInformation={tourInformation} />
      <PhotoPackage photoPackage={photoPackage} />
      <TourManager tourManager={tourManager} />
      {!userFeedback && isAuthenticated ? <FeedbackForm id={tourId} /> : null}
      {userFeedback ? <UserFeedback userFeedback={userFeedback} /> : null}
      <FeedbackList feedbackList={feedbackList} />
    </>
  );
};

export default TourPage;
