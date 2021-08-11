import { useDispatch } from "react-redux";
import { Api } from "../api/api";
import { hideLoader, showLoader } from "../loader/loaderActions";
import {
  fetchTourFeedbackList,
  fetchPhotoStudioFeedbackList,
  fetchUserFeedbackList,
  addTourFeedback,
  addPhotoStudioFeedback,
  editTourFeedback,
  editPhotoStudioFeedback,
  deleteTourFeedback,
  deletePhotoStudioFeedback,
} from "./feedbackActions";

// Feedback type consatns
const TOUR = "TOUR";
const USER = "USER";
const STUDIO = "STUDIO";

const fetchFeedbackActions = {
  [TOUR]: fetchTourFeedbackList,
  [STUDIO]: fetchPhotoStudioFeedbackList,
  [USER]: fetchUserFeedbackList,
};

const addFeedbackActions = {
  [TOUR]: addTourFeedback,
  [STUDIO]: addPhotoStudioFeedback,
};

const editFeedbackActions = {
  [TOUR]: editTourFeedback,
  [STUDIO]: editPhotoStudioFeedback,
};

const deleteFeedbackActions = {
  [TOUR]: deleteTourFeedback,
  [STUDIO]: deletePhotoStudioFeedback,
};

const useFeedbackActions = feedbackType => {
  const dispatch = useDispatch();

  const fetchFeedbackList = id => {
    dispatch(showLoader());

    Api.fetchFeedbackList({ id, type: feedbackType })
      .then(response => {
        dispatch(fetchFeedbackActions[feedbackType](response));
        // dispatch(fetchTourFeedbackList(response));
        //dispatch({ type: feedbackType, payload: response });
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(hideLoader());
      });
  };

  const addFeedback = id => {
    dispatch(showLoader());

    Api.addFeedback({ id, type: feedbackType })
      .then(response => {
        dispatch(addFeedbackActions[feedbackType](response));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(hideLoader());
      });
  };

  const editFeedback = id => {
    dispatch(showLoader());

    Api.editFeedback({ id, type: feedbackType })
      .then(response => {
        dispatch(editFeedbackActions[feedbackType](response));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(hideLoader());
      });
  };

  const deleteFeedback = id => {
    dispatch(showLoader());

    Api.deleteFeedback({ id, type: feedbackType })
      .then(response => {
        dispatch(deleteFeedbackActions[feedbackType](response));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(hideLoader());
      });
  };

  return { fetchFeedbackList, addFeedback, editFeedback, deleteFeedback };
};

export default useFeedbackActions;
