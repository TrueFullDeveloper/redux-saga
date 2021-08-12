import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import FeedbackEditModal from "../feedbackEditModal/FeedbackEditModal";

const UserFeedback = ({ userFeedback, changeFeedback, removeFeedback }) => {
  const { t } = useTranslation();
  const [editMode, setEditMode] = useState(false);

  const onRemove = () => {
    removeFeedback({ id: userFeedback.feedbackId });
  };

  return (
    <div>
      {editMode ? (
        <FeedbackEditModal
          userFeedback={userFeedback}
          setEditMode={setEditMode}
          changeFeedback={changeFeedback}
        />
      ) : null}

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
      <button type="button" onClick={() => setEditMode(true)}>
        РЕДАКТИРОВАТЬ
      </button>
    </div>
  );
};

UserFeedback.propTypes = {
  userFeedback: PropTypes.object.isRequired,
  changeFeedback: PropTypes.func.isRequired,
  removeFeedback: PropTypes.func.isRequired,
};

export default UserFeedback;
