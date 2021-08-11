import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import useStudioActions from "../../store/studio/useStudioActions";
//i18n
import { useTranslation } from "react-i18next";

const FeedbackForm = ({ id }) => {
  const { t } = useTranslation();
  const { sendFeedback } = useStudioActions();
  const [isRate, setRate] = useState(false);

  const onClick = userRating => {
    setFieldValue("userRating", userRating);
    setRate(true);
  };

  const { handleSubmit, handleChange, setFieldValue, values, errors, touched } = useFormik({
    initialValues: {
      userRating: "",
      feedbackText: "",
    },

    validationSchema: yup.object({
      userRating: yup.number().required(t("pages.photoStudioPage.ratingNotRequiredError")),
      feedbackText: yup
        .string()
        .max(400, t("pages.photoStudioPage.feedbackExceedsLimitError"))
        .required(t("pages.photoStudioPage.feedbackNotRequiredError")),
    }),

    onSubmit: ({ feedbackText, userRating }) => {
      //sendFeedback({ id, feedbackText, userRating });
    },
  });

  return (
    <div>
      <div></div>
      <h1>{t("pages.photoStudioPage.feedbackFormTitle")}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          {isRate ? (
            <span>
              {t("pages.photoStudioPage.ratingMessage")} {values.userRating}
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
          placeholder={t("pages.photoStudioPage.feedbackFormPlaceholder")}
          value={values.feedbackText}
          onChange={handleChange}
        />

        {touched.feedbackText && errors.feedbackText ? <span>{errors.feedbackText}</span> : null}

        {touched.userRating && errors.userRating ? <span>{errors.userRating}</span> : null}

        <button type="submit">{t("pages.photoStudioPage.feedbackFormButton")}</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
