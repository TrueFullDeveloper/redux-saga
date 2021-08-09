import React from "react";
//i18n
import { useTranslation } from "react-i18next";

const PhotoStudioInformation = ({ photoStudio }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{photoStudio.studioName}</h1>

      {photoStudio.hallsPhotos.map((hallItem, hallIndex) => (
        <div key={hallIndex}>
          <img src={hallItem} alt="No photo(" />
        </div>
      ))}

      <ul>
        <li>{photoStudio.stidioRating}</li>
        <li>{photoStudio.studioLocation}</li>
        <li>{t("pages.photoStudioPage.photoStudioArea") + photoStudio.studioArea} м²</li>
        <li>от {photoStudio.studioCost} ₽</li>
        <li>{t("pages.photoStudioPage.photoStudioWorkHours") + photoStudio.studioWorkHours}</li>
        <li>{t("pages.photoStudioPage.photoStudioPhone") + photoStudio.studioContactPhone}</li>
      </ul>

      {photoStudio.studionSocialMedia.instagram ? (
        <a href={photoStudio.studionSocialMedia.instagram}>Instagram</a>
      ) : null}

      {photoStudio.studionSocialMedia.facebook ? (
        <a href={photoStudio.studionSocialMedia.facebook}>Facebook</a>
      ) : null}

      {photoStudio.studionSocialMedia.vkontakte ? (
        <a href={photoStudio.studionSocialMedia.vkontakte}>Vk</a>
      ) : null}
    </div>
  );
};

export default PhotoStudioInformation;
