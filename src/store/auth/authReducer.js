import { LOGIN, SIGNUP } from "./authActions";

const initialState = {
  userId: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, userId: action.payload };
    case SIGNUP:
      return { ...state, userId: action.payload };
    default:
      return state;
  }
};
