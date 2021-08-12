import {
  ADD_FEEDBACK,
  EDIT_FEEDBACK,
  DELETE_FEEDBACK,
  FETCH_FEEDBACK_LIST,
} from "./feedbackActions";
import { FEEDBACK_INSTANCES } from "../../config/feedbackConfig";

/*
  [instance]: {
    list: [],
    my: null
  }
*/

const initialState = Object.fromEntries(
  FEEDBACK_INSTANCES.map(instance => [instance, { list: [], my: null }])
);

export const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FEEDBACK_LIST:
    case ADD_FEEDBACK:
    case EDIT_FEEDBACK:
    case DELETE_FEEDBACK:
      return {
        ...state,
        [action.payload.instance]: {
          list: action.payload.list,
          my: action.payload.my,
        },
      };

    default:
      return state;
  }
};
