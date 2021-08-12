import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const FeedbackList = ({ feedbackList }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("common.feedback.feedbackListTitle")}</h1>

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

FeedbackList.propTypes = {
  feedbackList: PropTypes.array.isRequired,
};

export default FeedbackList;
