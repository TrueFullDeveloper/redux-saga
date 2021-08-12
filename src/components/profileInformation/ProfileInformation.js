import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const ProfileInformation = ({ profile }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <img src={profile.photo} alt="No photo(" />
      </div>
      <div>
        <h1>{profile.firstName}</h1>
        {profile.lastName ? <h1>{profile.lastName}</h1> : null}
        <h2>{profile.role}</h2>
      </div>
      <h3>{t("pages.profile.aboutUserTitle")}</h3>
      <p>{profile.profileDescription}</p>
      <span>{t("pages.profile.userLanguagesTitle") + profile.userLanguages}</span>
    </div>
  );
};

ProfileInformation.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileInformation;
