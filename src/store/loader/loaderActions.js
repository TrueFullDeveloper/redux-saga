export const ADD_CALL = "SHOW_LOADER";
export const SUB_CALL = "HIDE_LOADER";

export const addLoaderCall = () => {
  return {
    type: ADD_CALL,
  };
};

export const subLoaderCall = payload => {
  return {
    type: SUB_CALL,
    payload,
  };
};
