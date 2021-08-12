import React, { useState } from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as yup from "yup";

import { useTranslation } from "react-i18next";

const FeedbackForm = ({ id, sendFeedback }) => {
  const { t } = useTranslation();
  const [isRate, setRate] = useState(false);

  const { handleSubmit, handleChange, setFieldValue, values, errors, touched } = useFormik({
    initialValues: {
      userRating: "",
      feedbackText: "",
    },

    validationSchema: yup.object({
      userRating: yup.number().required(t("common.feedback.ratingNotRequiredError")),
      feedbackText: yup
        .string()
        .max(400, t("common.feedback.feedbackExceedsLimitError"))
        .required(t("common.feedback.feedbackNotRequiredError")),
    }),

    onSubmit: ({ feedbackText, userRating }) => {
      sendFeedback({ id, feedbackText, userRating });
    },
  });

  const onClick = userRating => {
    setFieldValue("userRating", userRating);
    setRate(true);
  };

  return (
    <div>
      <div></div>
      <h1>{t("common.feedback.feedbackFormTitle")}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          {isRate ? (
            <span>
              {t("common.feedback.ratingMessage")} {values.userRating}
            </span>
          ) : (
            <>
              <i onClick={() => onClick(5)}>5</i>
              <i onClick={() => onClick(4)}>4</i>
              <i onClick={() => onClick(3)}>3</i>
              <i onClick={() => onClick(2)}>2</i>
              <i onClick={() => onClick(1)}>1</i>
            </>
          )}
        </div>

        <textarea
          type="text"
          id="feedbackText"
          name="feedbackText"
          placeholder={t("common.feedback.feedbackFormPlaceholder")}
          value={values.feedbackText}
          onChange={handleChange}
        />

        {touched.feedbackText && errors.feedbackText ? <span>{errors.feedbackText}</span> : null}

        {touched.userRating && errors.userRating ? <span>{errors.userRating}</span> : null}

        <button type="submit">{t("common.feedback.feedbackFormButton")}</button>
      </form>
    </div>
  );
};

FeedbackForm.propTypes = {
  id: PropTypes.number.isRequired,
  sendFeedback: PropTypes.func.isRequired,
};

export default FeedbackForm;
