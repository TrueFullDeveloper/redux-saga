import React from "react";
import { Link } from "react-router-dom";
//i18n
import { useTranslation } from "react-i18next";

const PhotoStudioList = ({ photoStudioList }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("pages.photoStudioCatalog.photoStudioCatalogTitle")}</h1>

      {photoStudioList.map(studioListItem => (
        <div key={studioListItem.studioId}>
          <img src={studioListItem.photoTitle} alt="No photo(" />
          <h1>{studioListItem.studioName}</h1>
          <ul>
            <li>{t("pages.photoStudioCatalog.numberOfHallTitle") + studioListItem.numberOfHall}</li>
            <li>{studioListItem.studioLocation}</li>
            <li>{studioListItem.studioArea} м²</li>
            <li>от {studioListItem.studioCost} ₽</li>
          </ul>
          <div>{studioListItem.stidioRating}</div>

          <Link to={`/photo_studio/${studioListItem.studioId}`}>
            <button type="button">{t("pages.photoStudioCatalog.moreDetailsButton")}</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PhotoStudioList;
