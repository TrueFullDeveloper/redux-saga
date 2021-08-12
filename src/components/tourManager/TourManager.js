import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const TourManager = ({ tourManager }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("pages.tourPage.aboutTourManagerTitle")}</h1>
      <img src={tourManager.photo} alt="No photo(" />
      <div>{tourManager.firstName}</div>
      <div>{tourManager.lastName}</div>
      <div>{tourManager.speciality}</div>
      <p>{tourManager.managerDescription}</p>

      <Link to={`/tour_manager/${tourManager.tourManagerId}`}>
        <button type="button">{t("pages.tourPage.moreDetailsButton")}</button>
      </Link>
    </div>
  );
};

TourManager.propTypes = {
  tourManager: PropTypes.object.isRequired,
};

export default TourManager;
