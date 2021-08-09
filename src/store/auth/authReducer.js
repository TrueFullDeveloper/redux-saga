import { authActions } from "./authActions";

const initialState = {
  userId: null,
  isAuthenticated: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActions.LOGIN:
    case authActions.SIGNUP:
    case authActions.TOKEN_UPDATE:
      return { ...state, userId: action.payload.userId, isAuthenticated: true };
    case authActions.LOGOUT:
      return { ...state, userId: null, isAuthenticated: false };
    default:
      return state;
  }
};
