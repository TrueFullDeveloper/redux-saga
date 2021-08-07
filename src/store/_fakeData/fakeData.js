import tourManagerPhoto from "../../static/fakeImages/tourData/tourManagerPhoto.png";
import photoTitle from "../../static/fakeImages/tourData/tourPhotoTitle.jpg";
import photoPackage1 from "../../static/fakeImages/tourData/photoPackage1.jpg";
import photoPackage2 from "../../static/fakeImages/tourData/photoPackage2.jpg";
import photoPackage3 from "../../static/fakeImages/tourData/photoPackage3.jpg";

export const authData = {
  userId: 10,
  userToken: "FASDFSD23523RFF232FR23FW",
};

export const tourData = {
  tourList: [
    {
      tourId: 0,
      tourTitle: "Some Title",
      tourDescription: "Some Description",
      tourPhotoTitle: photoTitle,
      tourRate: 5,
    },
    {
      tourId: 1,
      tourTitle: "Some Title",
      tourDescription: "Some Description",
      tourPhotoTitle: photoTitle,
      tourRate: 5,
    },
    {
      tourId: 2,
      tourTitle: "Some Title",
      tourDescription: "Some Description",
      tourPhotoTitle: photoTitle,
      tourRate: 5,
    },
    {
      tourId: 3,
      tourTitle: "Some Title",
      tourDescription: "Some Description",
      tourPhotoTitle: photoTitle,
      tourRate: 5,
    },
    {
      tourId: 4,
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
    shootingTime: "3 часа съемки",
    tourLanguages: "Русский, English",
    tourCost: 8956,
    tourLocation: "Томск",
    numberOfPhotos: "Более 20 фотографий",
    tourRating: "Более 50 отзывов с оценкой",
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
    tourManagerId: 0,
    photo: tourManagerPhoto,
    firstName: "Artem",
    lastName: "Krivchun",
    speciality: "Фотограф",
    managerDescription:
      "Lfsdgag gsdgs dgf gds hsgfhhhhrhqegag gsdgwegbg fg sdfhs gh sj tjs jgf jtj t herahrehrehferdfh herhare hareh aerh rehare hare hre aharehaerh rehareh",
  },
};
export const tourManagerData = {
  managerTourList: [
    {
      tourId: 0,
      tourTitle: "Some Title",
      tourDescription: "Some Description",
      tourPhotoTitle: photoTitle,
      tourRate: 5,
    },
    {
      tourId: 1,
      tourTitle: "Some Title",
      tourDescription: "Some Description",
      tourPhotoTitle: photoTitle,
      tourRate: 5,
    },
    {
      tourId: 2,
      tourTitle: "Some Title",
      tourDescription: "Some Description",
      tourPhotoTitle: photoTitle,
      tourRate: 5,
    },
    {
      tourId: 3,
      tourTitle: "Some Title",
      tourDescription: "Some Description",
      tourPhotoTitle: photoTitle,
      tourRate: 5,
    },
  ],
  tourManager: {
    tourManagerId: 0,
    photo: tourManagerPhoto,
    firstName: "Artem",
    lastName: "Krivchun",
    speciality: "Фотограф",
    managerDescription:
      "Lfsdgag gsdgs dgf gds hsgfhhhhrhqegag gsdgwegbg fg sdfhs gh sj tjs jgf jtj t herahrehrehferdfh herhare hareh aerh rehare hare hre aharehaerh rehareh",
    averageTourRating: 5,
    managerLanguages: "Русский, English",
  },
};
