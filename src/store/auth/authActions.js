export const authActions = {
  LOGIN: "LOGIN",
  SIGNUP: "SIGNUP",
  LOGOUT: "LOGOUT",
  TOKEN_UPDATE: "TOKEN_UPDATE",
};

export const login = payload => {
  return {
    type: authActions.LOGIN,
    payload,
  };
};

export const signup = payload => {
  return {
    type: authActions.SIGNUP,
    payload,
  };
};

export const tokenUpdate = payload => {
  return {
    type: authActions.TOKEN_UPDATE,
    payload,
  };
};

export const logout = () => {
  return {
    type: authActions.LOGOUT,
  };
};
