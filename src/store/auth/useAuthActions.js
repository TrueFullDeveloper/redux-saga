import { useDispatch } from "react-redux";
import { Api } from "../api/api";
import { hideLoader, showLoader } from "../loader/loaderActions";
import { login, signup } from "./authActions";

const useAuthActions = () => {
  const dispatch = useDispatch();

  const doLogin = ({ email, password }) => {
    dispatch(showLoader());

    Api.login({ email, password })
      .then(response => {
        dispatch(login(response));
      })
      .catch(error => console.log(error));

    dispatch(hideLoader());
  };

  const doSignup = ({ email, password, userName }) => {
    dispatch(showLoader());

    Api.signup({ email, password, userName })
      .then(response => {
        dispatch(signup(response));
      })
      .catch(error => console.log(error));

    dispatch(hideLoader());
  };

  return { doLogin, doSignup };
};

export default useAuthActions;

/*
const { doLogin } = useAuthActions();

const onSubmit = ({ email, password }) => {
  doLogin({ email, password });
}


<form onSubmit={onSubmit}>
  <input type="email" />
</form>
 */
