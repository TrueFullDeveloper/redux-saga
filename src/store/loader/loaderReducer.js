import { HIDE_LOADER, SHOW_LOADER } from "./loaderActions";

const initialState = {
  loading: false,
};

export const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
};
