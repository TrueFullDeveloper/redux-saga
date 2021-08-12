import React from "react";
import PropTypes from "prop-types";

import { useTranslation } from "react-i18next";

const PhotoPackage = ({ photoPackage }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("pages.tourPage.photoPackageTitle")}</h1>

      <div>
        {photoPackage.map((photoItem, photoIndex) => (
          <img src={photoItem} key={photoIndex} alt="No photo" />
        ))}
      </div>
    </div>
  );
};

PhotoPackage.propTypes = {
  photoPackage: PropTypes.array.isRequired,
};

export default PhotoPackage;
