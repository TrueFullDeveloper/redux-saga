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

const useFeedbackActions = feedbackType => {
  const dispatch = useDispatch();

  const fetchFeedbackList = id => {
    dispatch(showLoader());

    Api.fetchFeedbackList({ id, type: feedbackType })
      .then(response => {
        dispatch(fetchTourFeedbackList(response));
        dispatch({ type: feedbackType, payload: response });
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(hideLoader());
      });
  };

  const addFeedback = () => {
    dispatch(showLoader());
  };

  const editFeedback = () => {
    dispatch(showLoader());
  };

  const deleteFeedback = () => {
    dispatch(showLoader());
  };

  return { fetchFeedbackList, addFeedback, editFeedback, deleteFeedback };
};

export default useFeedbackActions;
