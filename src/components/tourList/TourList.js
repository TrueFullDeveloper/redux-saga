import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TourList = ({ tourList }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("pages.mainPage.tourListTitle")}</h1>

      {tourList.map(tourListItem => (
        <div key={tourListItem.tourId}>
          <img src={tourListItem.tourPhotoTitle} alt="No photo(" />
          <h1>{tourListItem.tourTitle}</h1>
          <p>{tourListItem.tourDescription}</p>
          <div>{tourListItem.tourRate}</div>

          <Link to={`/tour/${tourListItem.tourId}`}>
            <button type="button">{t("pages.mainPage.moreDetailsButton")}</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

TourList.propTypes = {
  tourList: PropTypes.array.isRequired,
};

export default TourList;
