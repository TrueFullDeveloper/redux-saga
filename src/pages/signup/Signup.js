import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import useAuthActions from "../../store/auth/useAuthActions";
import { useTranslation } from "react-i18next";

//TODO: Add Normal Equal Password Validation

const Signup = () => {
  const { t } = useTranslation();
  const { doSignup } = useAuthActions();

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      name: "",
      emailField: "",
      password: "",
      passwordRep: "",
    },

    validationSchema: yup.object({
      name: yup
        .string()
        .min(1, t("common.userNameField.userNameShortError"))
        .max(20, t("common.userNameField.userNameExceedsLimitError"))
        .required(t("common.userNameField.userNameNotRequiredError")),
      emailField: yup
        .string()
        .email(t("common.emailField.emailValidationError"))
        .required(t("common.emailField.emailNotRequiredError")),
      password: yup
        .string()
        .min(6, t("common.passwordField.passwordShortError"))
        .max(40, t("common.passwordField.passwordExceedsLimitError"))
        .required(t("common.passwordField.passwordNotRequiredError")),
      passwordRep: yup.string().required(t("common.passwordField.repeatPasswordPlaceholder")),
    }),

    onSubmit: ({ name, emailField, password, passwordRep }) => {
      if (password === passwordRep) {
        doSignup({ email: emailField, password, userName: name });
      } else {
        alert(t("common.passwordField.passwordsNotMatchUpError"));
      }
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <h1>{t("pages.signup.signupTitle")}</h1>

      <input
        placeholder="Имя"
        type="text"
        id="name"
        name="name"
        value={values.name}
        onChange={handleChange}
      />

      {touched.name && errors.name ? <span>{errors.name}</span> : null}

      <input
        placeholder={t("common.userNameField.userNamePlaceholder")}
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

      <input
        placeholder={t("common.passwordField.repeatPasswordPlaceholder")}
        type="password"
        id="passwordRep"
        name="passwordRep"
        value={values.passwordRep}
        onChange={handleChange}
      />

      {touched.passwordRep && errors.passwordRep ? <span>{errors.passwordRep}</span> : null}

      <button type="submit">{t("pages.signup.signupButton")}</button>
      <Link to="/login">{t("pages.signup.loginLink")}</Link>
    </form>
  );
};

export default Signup;
