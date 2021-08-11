import React from "react";
//i18n
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const UserFeedback = ({ userFeedback }) => {
  const { t } = useTranslation();

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
    </div>
  );
};

export default UserFeedback;
