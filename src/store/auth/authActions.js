export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";

export const login = () => {
  return {
    type: LOGIN,
  };
};

export const signup = () => {
  return {
    type: SIGNUP,
  };
};
