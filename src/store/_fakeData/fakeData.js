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

export const profileData = {
  photo: tourManagerPhoto,
  firstName: "Artem",
  lastName: "Krivchun",
  role: "Организатор",
  profileDescription:
    "Lfsdgag gsdgs dgf gds hsgfhhhhrhqegag gsdgwegbg fg sdfhs gh sj tjs jgf jtj t herahrehrehferdfh herhare hareh aerh rehare hare hre aharehaerh rehareh",
  userLanguages: "Русский, English",
};

export const photoStudioData = {
  photoStudioList: [
    {
      studioId: 0,
      photoTitle: photoTitle,
      studioName: "Томсон",
      numberOfHall: 2,
      studioLocation: "г. Томск, ул. Говорова, 19в ст1 — 3 этаж",
      studioArea: 125,
      stidioRating: 4,
      studioCost: 1300,
    },
    {
      studioId: 1,
      photoTitle: photoTitle,
      studioName: "Томсон",
      numberOfHall: 2,
      studioLocation: "г. Томск, ул. Говорова, 19в ст1 — 3 этаж",
      studioArea: 125,
      stidioRating: 4,
      studioCost: 1300,
    },
    {
      studioId: 2,
      photoTitle: photoTitle,
      studioName: "Томсон",
      numberOfHall: 2,
      studioLocation: "г. Томск, ул. Говорова, 19в ст1 — 3 этаж",
      studioArea: 125,
      stidioRating: 4,
      studioCost: 1300,
    },
    {
      studioId: 3,
      photoTitle: photoTitle,
      studioName: "Томсон",
      numberOfHall: 2,
      studioLocation: "г. Томск, ул. Говорова, 19в ст1 — 3 этаж",
      studioArea: 125,
      stidioRating: 4,
      studioCost: 1300,
    },
  ],
  photoStudio: {
    hallsPhotos: [photoTitle, photoTitle],
    studioName: "Томсон",
    studioLocation: "г. Томск, ул. Говорова, 19в ст1 — 3 этаж",
    studioArea: 125,
    stidioRating: 4,
    studioCost: 1300,
    studioWorkHours: "08:00 - 20:00 Понедельник - Воскресенье",
    studioContactPhone: "+7-(906)-960-10-87",
    studionSocialMedia: {
      instagram: "https://www.instagram.com/",
      facebook: "https://www.facebook.com/",
      vkontakte: "https://vk.com/",
    },
  },
  studioPhotoPackage: [photoTitle, photoTitle, photoTitle, photoTitle],
  studioFeedbackList: [
    {
      feedbackId: 0,
      authorId: 0,
      authorName: "Альберт",
      authorPhoto: photoTitle,
      authorRating: 4,
      createdAt: "21.04.2021",
      feedbackText:
        "Буду краток в форме изложения своего мнения о данном мероприятии: Мероприятие стоищее, не пожалел, что сходил!",
    },
    {
      feedbackId: 1,
      authorId: 1,
      authorName: "Альберт",
      authorPhoto: photoTitle,
      authorRating: 4,
      createdAt: "21.04.2021",
      feedbackText:
        "Буду краток в форме изложения своего мнения о данном мероприятии: Мероприятие стоищее, не пожалел, что сходил!",
    },
    {
      feedbackId: 2,
      authorId: 2,
      authorName: "Альберт",
      authorPhoto: photoTitle,
      authorRating: 4,
      createdAt: "21.04.2021",
      feedbackText:
        "Буду краток в форме изложения своего мнения о данном мероприятии: Мероприятие стоищее, не пожалел, что сходил!",
    },
  ],
  userFeedback: {
    feedbackId: 6,
    authorId: 6,
    authorName: "Альберт",
    authorPhoto: photoTitle,
    authorRating: 4,
    createdAt: "21.04.2021",
    feedbackText:
      "Буду краток в форме изложения своего мнения о данном мероприятии: Мероприятие стоищее, не пожалел, что сходил!",
  },
};

export const userProfileData = {
  userFeedbackList: [
    {
      feedbackId: 0,
      authorId: 0,
      authorName: "Альберт",
      authorPhoto: photoTitle,
      authorRating: 4,
      createdAt: "21.04.2021",
      feedbackText:
        "Буду краток в форме изложения своего мнения о данном мероприятии: Мероприятие стоищее, не пожалел, что сходил!",
    },
    {
      feedbackId: 1,
      authorId: 1,
      authorName: "Альберт",
      authorPhoto: photoTitle,
      authorRating: 4,
      createdAt: "21.04.2021",
      feedbackText:
        "Буду краток в форме изложения своего мнения о данном мероприятии: Мероприятие стоищее, не пожалел, что сходил!",
    },
    {
      feedbackId: 2,
      authorId: 2,
      authorName: "Альберт",
      authorPhoto: photoTitle,
      authorRating: 4,
      createdAt: "21.04.2021",
      feedbackText:
        "Буду краток в форме изложения своего мнения о данном мероприятии: Мероприятие стоищее, не пожалел, что сходил!",
    },
  ],
  userProfile: {
    photo: tourManagerPhoto,
    firstName: "Artem",
    lastName: "Krivchun",
    role: "Организатор",
    profileDescription:
      "Lfsdgag gsdgs dgf gds hsgfhhhhrhqegag gsdgwegbg fg sdfhs gh sj tjs jgf jtj t herahrehrehferdfh herhare hareh aerh rehare hare hre aharehaerh rehareh",
    userLanguages: "Русский, English",
  },
};
