import { useDispatch } from "react-redux";
import { Api } from "../api/api";
import { hideLoader, showLoader } from "../loader/loaderActions";
import { fetchFeedbackList, addFeedback, editFeedback, deleteFeedback } from "./feedbackActions";

const useFeedbackActions = feedbackType => {
  const dispatch = useDispatch();

  const getFeedbackList = id => {
    dispatch(showLoader());

    Api.fetchFeedbackList({ id, type: feedbackType })
      .then(response => {
        dispatch(fetchFeedbackList({ ...response, instance: feedbackType }));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(hideLoader());
      });
  };

  const sendFeedback = id => {
    dispatch(showLoader());

    Api.addFeedback({ id, type: feedbackType })
      .then(response => {
        dispatch(addFeedback({ ...response, instance: feedbackType }));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(hideLoader());
      });
  };

  const changeFeedback = id => {
    dispatch(showLoader());

    Api.editFeedback({ id, type: feedbackType })
      .then(response => {
        dispatch(editFeedback({ ...response, instance: feedbackType }));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(hideLoader());
      });
  };

  const removeFeedback = id => {
    dispatch(showLoader());

    Api.deleteFeedback({ id, type: feedbackType })
      .then(response => {
        dispatch(deleteFeedback({ ...response, instance: feedbackType }));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(hideLoader());
      });
  };

  return { getFeedbackList, sendFeedback, changeFeedback, removeFeedback };
};

export default useFeedbackActions;
