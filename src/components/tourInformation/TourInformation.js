import React from "react";

const TourInformation = ({ tourInformation }) => {
  return (
    <div>
      <h1>{tourInformation.tourTitle}</h1>
      <img src={tourInformation.tourPhotoTitle} alt="No photo(" />
      <p>{tourInformation.tourDescription}</p>
      <div>{tourInformation.shootingTime}</div>
      <div>{tourInformation.tourLanguages}</div>
      <div>{tourInformation.tourCost}</div>
      <div>{tourInformation.tourLocation}</div>
      <div>{tourInformation.numberOfPhotos}</div>
      <div>{tourInformation.tourRating}</div>
    </div>
  );
};

export default TourInformation;
