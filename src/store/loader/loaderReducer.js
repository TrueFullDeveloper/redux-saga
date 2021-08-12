import { ADD_CALL, SUB_CALL } from "./loaderActions";

const initialState = {
  calls: 0,
};

export const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CALL:
      return { ...state, calls: state.calls + 1 };
    case SUB_CALL:
      return { ...state, calls: state.calls - 1 };
    default:
      return state;
  }
};
