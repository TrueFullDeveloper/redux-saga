import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const TourManagerInformation = ({ tourManager }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <img src={tourManager.photo} alt="No photo(" />
      </div>
      <div>
        <h1>{tourManager.firstName}</h1>
        {tourManager.lastName ? <h1>{tourManager.lastName}</h1> : null}
        <h2>{tourManager.speciality}</h2>
      </div>
      <h3>{t("pages.tourManagerPage.aboutManagerTitle")}</h3>
      <p>{tourManager.managerDescription}</p>
      <div>Average rating: {tourManager.averageTourRating}</div>
      <span>{t("pages.tourManagerPage.managerLanguagesTitle") + tourManager.managerLanguages}</span>
    </div>
  );
};

TourManagerInformation.propTypes = {
  tourManager: PropTypes.object.isRequired,
};

export default TourManagerInformation;
