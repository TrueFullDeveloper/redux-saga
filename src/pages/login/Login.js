import React from "react";
import { Link } from "react-router-dom";
import useAuthActions from "../../store/auth/useAuthActions";
import { useFormik } from "formik";
import * as yup from "yup";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  const { doLogin } = useAuthActions();

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      emailField: "",
      password: "",
    },

    validationSchema: yup.object({
      emailField: yup
        .string()
        .email(t("common.emailField.emailValidationError"))
        .required(t("common.emailField.emailNotRequiredError")),
      password: yup.string().required(t("common.passwordField.passwordNotRequiredError")),
    }),

    onSubmit: ({ emailField, password }) => {
      doLogin({ email: emailField, password });
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <h1>{t("pages.login.loginTitle")}</h1>

      <input
        placeholder={t("common.emailField.emailPlaceholder")}
        type="text"
        id="emailField"
        name="emailField"
        value={values.emailField}
        onChange={handleChange}
      />
      {touched.emailField && errors.emailField ? <span>{errors.emailField}</span> : null}

      <input
        placeholder={t("common.passwordField.passwordPlaceholder")}
        type="password"
        id="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      {touched.password && errors.password ? <span>{errors.password}</span> : null}

      <button type="submit">{t("pages.login.signinButton")}</button>

      <div>
        <Link to="/signup">{t("pages.login.signupLink")}</Link>
      </div>
    </form>
  );
};

export default Login;
