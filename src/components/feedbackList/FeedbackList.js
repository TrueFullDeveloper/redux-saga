import React from "react";
//i18n
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const FeedbackList = ({ feedbackList }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("pages.photoStudioPage.feedbackListTitle")}</h1>

      {feedbackList.map(feedbackItem => (
        <div key={feedbackItem.feedbackId}>
          <Link to={`/user_profile/${feedbackItem.authorId}`}>
            <div>
              <img src={feedbackItem.authorPhoto} alt="No photo(" />
            </div>
            <h2>{feedbackItem.authorName}</h2>
          </Link>
          <div>{feedbackItem.authorRating}</div>
          <span>{feedbackItem.createdAt}</span>
          <p>{feedbackItem.feedbackText}</p>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;
