import { useDispatch } from "react-redux";
import { USER_TOKEN } from "../../config/constans";
import { Api } from "../api/api";
import { addLoaderCall, subLoaderCall } from "../loader/loaderActions";
import { login, signup, tokenUpdate } from "./authActions";

const useAuthActions = () => {
  const dispatch = useDispatch();

  const doLogin = ({ email, password }) => {
    dispatch(addLoaderCall());

    Api.login({ email, password })
      .then(response => {
        dispatch(login(response));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(subLoaderCall());
      });
  };

  const doSignup = ({ email, password, userName }) => {
    dispatch(addLoaderCall());

    Api.signup({ email, password, userName })
      .then(response => {
        dispatch(signup(response));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(subLoaderCall());
      });
  };

  const doTokenUpdate = () => {
    const userToken = localStorage.getItem(USER_TOKEN);

    if (userToken) {
      dispatch(addLoaderCall());

      Api.tokenUpdate({ userToken })
        .then(response => {
          dispatch(tokenUpdate(response));
        })
        .catch(error => console.log(error))
        .finally(() => {
          dispatch(subLoaderCall());
        });
    }
  };

  return { doLogin, doSignup, doTokenUpdate };
};

export default useAuthActions;
