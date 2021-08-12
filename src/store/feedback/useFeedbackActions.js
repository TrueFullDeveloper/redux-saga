import { useDispatch } from "react-redux";
import { Api } from "../api/api";
import { fetchFeedbackList, addFeedback, editFeedback, deleteFeedback } from "./feedbackActions";
import { addLoaderCall, subLoaderCall } from "../loader/loaderActions";

const useFeedbackActions = feedbackType => {
  const dispatch = useDispatch();

  const getFeedbackList = id => {
    dispatch(addLoaderCall());

    Api.fetchFeedbackList({ id, type: feedbackType })
      .then(response => {
        dispatch(fetchFeedbackList({ ...response, instance: feedbackType }));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(subLoaderCall());
      });
  };

  const sendFeedback = id => {
    dispatch(addLoaderCall());

    Api.addFeedback({ id, type: feedbackType })
      .then(response => {
        dispatch(addFeedback({ ...response, instance: feedbackType }));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(subLoaderCall());
      });
  };

  const changeFeedback = id => {
    dispatch(addLoaderCall());

    Api.editFeedback({ id, type: feedbackType })
      .then(response => {
        dispatch(editFeedback({ ...response, instance: feedbackType }));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(subLoaderCall());
      });
  };

  const removeFeedback = id => {
    dispatch(addLoaderCall());

    Api.deleteFeedback({ id, type: feedbackType })
      .then(response => {
        dispatch(deleteFeedback({ ...response, instance: feedbackType }));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(subLoaderCall());
      });
  };

  return { getFeedbackList, sendFeedback, changeFeedback, removeFeedback };
};

export default useFeedbackActions;
