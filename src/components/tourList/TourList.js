import React from "react";
import { Link } from "react-router-dom";
import useTourActions from "../../store/tour/useTourActions";
//i18n
import { useTranslation } from "react-i18next";

const TourList = ({ tourList }) => {
  const { t } = useTranslation();
  const { getTour } = useTourActions();

  return (
    <div>
      <h1>{t("pages.mainPage.tourListTitle")}</h1>

      {tourList.map(tourListItem => (
        <div key={tourListItem.tourId}>
          <img src={tourListItem.tourPhotoTitle} alt="No photo(" />
          <h1>{tourListItem.tourTitle}</h1>
          <p>{tourListItem.tourDescription}</p>
          <div>{tourListItem.tourRate}</div>

          <Link to="/tour">
            <button type="button" onClick={() => getTour({ tourId: tourListItem.tourId })}>
              {t("pages.mainPage.moreDetailsButton")}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TourList;
