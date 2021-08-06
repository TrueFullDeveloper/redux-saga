import tourManagerPhoto from "../../static/fakeImages/tourData/tourManagerPhoto.png";
import photoTitle from "../../static/fakeImages/tourData/tourPhotoTitle.jpg";
import photoPackage1 from "../../static/fakeImages/tourData/photoPackage1.jpg";
import photoPackage2 from "../../static/fakeImages/tourData/photoPackage2.jpg";
import photoPackage3 from "../../static/fakeImages/tourData/photoPackage3.jpg";

export const authData = {
  userId: 10,
};

export const tourData = {
  tourList: [
    {
      tourTitle: "Some Title",
      tourDescription: "Some Description",
      tourPhotoTitle: photoTitle,
      tourRate: 5,
    },
    {
      tourTitle: "Some Title",
      tourDescription: "Some Description",
      tourPhotoTitle: photoTitle,
      tourRate: 5,
    },
    {
      tourTitle: "Some Title",
      tourDescription: "Some Description",
      tourPhotoTitle: photoTitle,
      tourRate: 5,
    },
    {
      tourTitle: "Some Title",
      tourDescription: "Some Description",
      tourPhotoTitle: photoTitle,
      tourRate: 5,
    },
    {
      tourTitle: "Some Title",
      tourDescription: "Some Description",
      tourPhotoTitle: photoTitle,
      tourRate: 5,
    },
  ],
  tourInformation: {
    tourTitle: "Some Title",
    tourDescription: "Some Description",
    tourPhotoTitle: photoTitle,
    shootingTime: 3,
    tourLanguages: ["Русский", "English"],
    tourCost: 8956,
    tourLocation: "Томск",
    numberOfPhotos: 20,
    tourRating: 5,
  },
  photoPackage: [
    photoPackage1,
    photoPackage2,
    photoPackage3,
    photoPackage1,
    photoPackage2,
    photoPackage3,
    photoPackage1,
    photoPackage2,
    photoPackage3,
    photoPackage1,
    photoPackage2,
    photoPackage3,
    photoPackage1,
    photoPackage2,
    photoPackage3,
  ],
  tourManager: {
    photo: tourManagerPhoto,
    firstName: "Artem",
    lastName: "Krivchun",
    speciality: "Фотограф",
    managerDescription:
      "Lfsdgag gsdgs dgf gds hsgfhhhhrhqegag gsdgwegbg fg sdfhs gh sj tjs jgf jtj t herahrehrehferdfh herhare hareh aerh rehare hare hre aharehaerh rehareh",
  },
};
