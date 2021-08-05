export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";
export const LOGOUT = "LOGOUT";

export const login = payload => {
  return {
    type: LOGIN,
    payload,
  };
};

export const signup = payload => {
  return {
    type: SIGNUP,
    payload,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
