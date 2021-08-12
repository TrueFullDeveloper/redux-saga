import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { createPortal } from "react-dom";

import { useTranslation } from "react-i18next";

const FeedbackEditModal = ({ userFeedback, setEditMode, changeFeedback }) => {
  const { t } = useTranslation();
  const feedbackEditModal = useRef(document.createElement("div"));
  const [isRate, setRate] = useState(false);

  useEffect(() => {
    document.body.appendChild(feedbackEditModal.current);

    return () => document.body.removeChild(feedbackEditModal.current);
  }, []);

  const { handleSubmit, handleChange, setFieldValue, values, errors, touched } = useFormik({
    initialValues: {
      userRating: "",
      feedbackText: userFeedback.feedbackText,
    },

    validationSchema: yup.object({
      userRating: yup.number().required(t("pages.photoStudioPage.ratingNotRequiredError")),
      feedbackText: yup
        .string()
        .max(400, t("pages.photoStudioPage.feedbackExceedsLimitError"))
        .required(t("pages.photoStudioPage.feedbackNotRequiredError")),
    }),

    onSubmit: ({ feedbackText, userRating }) => {
      changeFeedback({ id: userFeedback.feedbackId, feedbackText, userRating });
      setEditMode(false);
    },
  });

  const onClick = userRating => {
    setFieldValue("userRating", userRating);
    setRate(true);
  };

  return createPortal(
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
      <button type="button" onClick={() => setEditMode(false)}>
        ЗАКРЫТЬ
      </button>
    </div>,
    feedbackEditModal.current
  );
};

export default FeedbackEditModal;
