import React from "react";
//i18n
import { useTranslation } from "react-i18next";

const StudioPhotoPackage = ({ studioPhotoPackage }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("pages.photoStudioPage.studioPhotoPackageTitle")}</h1>

      {studioPhotoPackage.map((photoItem, photoIndex) => (
        <div key={photoIndex}>
          <img src={photoItem} alt="No photo(" />
        </div>
      ))}
    </div>
  );
};

export default StudioPhotoPackage;
