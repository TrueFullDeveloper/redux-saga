import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const UserInformation = ({ userProfile }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <img src={userProfile.photo} alt="No photo(" />
      </div>
      <div>
        <h1>{userProfile.firstName}</h1>
        {userProfile.lastName ? <h1>{userProfile.lastName}</h1> : null}
        <h2>{userProfile.role}</h2>
      </div>
      <h3>{t("pages.userPage.aboutUserTitle")}</h3>
      <p>{userProfile.profileDescription}</p>
      <span>{t("pages.userPage.userLanguagesTitle") + userProfile.userLanguages}</span>
    </div>
  );
};

UserInformation.propTypes = {
  userProfile: PropTypes.object.isRequired,
};

export default UserInformation;
