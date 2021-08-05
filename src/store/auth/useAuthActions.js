import { useDispatch } from "react-redux";
import { Api } from "../api/api";
import { login, signup } from "./authActions";

const useAuthActions = () => {
  const dispatch = useDispatch();

  const doLogin = ({ email, password }) => {
    Api.login({ email, password })
      .then(response => {
        dispatch(login(response));
      })
      .catch(error => console.log(error));
  };

  const doSignup = ({ email, password, userName }) => {
    Api.signup({ email, password, userName })
      .then(response => {
        dispatch(signup(response));
      })
      .catch(error => console.log(error));
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
