import React, { useState } from "react";
//i18n
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const UserFeedback = ({ userFeedback, changeFeedback, removeFeedback }) => {
  const { t } = useTranslation();
  const [editMode, setEditMode] = useState(false);

  const onRemove = () => {
    removeFeedback({ id: userFeedback.feedbackId });
  };

  return (
    <div>
      <h1>{t("pages.photoStudioPage.userFeedbackTitle")}</h1>

      <div>
        <Link to={`/profile`}>
          <div>
            <img src={userFeedback.authorPhoto} alt="No photo(" />
          </div>
          <h2>{userFeedback.authorName}</h2>
        </Link>
        <div>{userFeedback.authorRating}</div>
        <span>{userFeedback.createdAt}</span>
        <p>{userFeedback.feedbackText}</p>
      </div>
      <button type="button" onClick={onRemove}>
        УДАЛИТЬ
      </button>
    </div>
  );
};

export default UserFeedback;
