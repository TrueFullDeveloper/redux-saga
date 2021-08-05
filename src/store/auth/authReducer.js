import { LOGIN, SIGNUP, LOGOUT } from "./authActions";

const initialState = {
  userId: null,
  isAuthenticated: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, userId: action.payload, isAuthenticated: true };
    case SIGNUP:
      return { ...state, userId: action.payload, isAuthenticated: true };
    case LOGOUT:
      return { ...state, userId: null, isAuthenticated: false };
    default:
      return state;
  }
};
