import {
  authData,
  tourData,
  tourManagerData,
  profileData,
  photoStudioData,
  userProfileData,
} from "../_fakeData/fakeData";
import axios from "axios";

export const Api = {
  // Auth API
  login: async ({ email, password }) => {
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      email,
      password,
    });

    return { userId: authData.userId, userToken: authData.userToken };
  },

  signup: async ({ email, password, userName }) => {
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      email,
      password,
      userName,
    });

    return { userId: authData.userId, userToken: authData.userToken };
  },

  tokenUpdate: async ({ userToken }) => {
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      userToken,
    });

    return { userId: authData.userId, userToken: authData.userToken };
  },

  // Tour API
  fetchTourList: async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=5"
    );

    return tourData.tourList;
  },

  fetchTourInformation: async ({ tourId }) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=5",
      { tourId }
    );

    return tourData.tourInformation;
  },

  fetchPhotoPackage: async ({ tourId }) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=5",
      { tourId }
    );

    return tourData.photoPackage;
  },

  fetchTourManager: async ({ tourId }) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=5",
      { tourId }
    );

    return tourData.tourManager;
  },

  // Tour Manger Profile API
  fetchTourManagerProfile: async ({ tourManagerId }) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=5",
      { tourManagerId }
    );

    return tourManagerData.tourManager;
  },

  fetchTourManagerTourList: async ({ tourManagerId }) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=5",
      { tourManagerId }
    );

    return tourManagerData.managerTourList;
  },

  // Profile API
  fetchProfile: async ({ userId }) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=5",
      { userId }
    );

    return profileData;
  },

  // Photo Studio API
  fetchPhotoStudioList: async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=5"
    );

    return photoStudioData.photoStudioList;
  },

  fetchPhotoStudioInformation: async ({ studioId }) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=5",
      { studioId }
    );

    return photoStudioData.photoStudio;
  },

  fetchStudioPhotoPackage: async ({ studioId }) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=5",
      { studioId }
    );

    return photoStudioData.studioPhotoPackage;
  },

  fetchStudioFeedbackList: async ({ studioId }) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=5",
      { studioId }
    );

    return photoStudioData.studioFeedbackList;
  },

  // User Profile API

  fetchUserProfile: async ({ userId }) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=5",
      { userId }
    );

    return userProfileData.userProfile;
  },

  fetchUserFeedbackList: async ({ userId }) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=5",
      { userId }
    );

    return userProfileData.userFeedbackList;
  },
};
