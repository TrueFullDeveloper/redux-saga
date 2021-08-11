import {
  authData,
  tourData,
  tourManagerData,
  profileData,
  photoStudioData,
  userProfileData,
} from "../_fakeData/fakeData";
import { instance } from "../../config/apiConfig";

export const Api = {
  // Auth API
  login: async ({ email, password }) => {
    const response = await instance.post("https://jsonplaceholder.typicode.com/posts", {
      email,
      password,
    });

    return { userId: authData.userId, userToken: authData.userToken };
  },

  signup: async ({ email, password, userName }) => {
    const response = await instance.post("https://jsonplaceholder.typicode.com/posts", {
      email,
      password,
      userName,
    });

    return { userId: authData.userId, userToken: authData.userToken };
  },

  tokenUpdate: async ({ userToken }) => {
    const response = await instance.post("https://jsonplaceholder.typicode.com/posts", {
      userToken,
    });

    return { userId: authData.userId, userToken: authData.userToken };
  },

  // Tour API
  fetchTourList: async () => {
    const response = await instance.get(
      "https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=5"
    );

    return tourData.tourList;
  },

  fetchTourInformation: async ({ tourId }) => {
    const response = await instance.get(
      "https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=5",
      { tourId }
    );

    return tourData.tourInformation;
  },

  fetchPhotoPackage: async ({ tourId }) => {
    const response = await instance.get(
      "https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=5",
      { tourId }
    );

    return tourData.photoPackage;
  },

  fetchTourManager: async ({ tourId }) => {
    const response = await instance.get(
      "https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=5",
      { tourId }
    );

    return tourData.tourManager;
  },

  fetchTourFeedbackList: async ({ id }) => {
    const response = await instance.get(
      "https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=5",
      { id }
    );

    return {
      tourFeedbackList: tourData.tourFeedbackList,
      userFeedback: tourData.userFeedback,
    };
  },

  addTourFeedback: async ({ id, feedbackText, userRating }) => {
    const response = await instance.post("https://jsonplaceholder.typicode.com/posts", {
      id,
      feedbackText,
      userRating,
    });

    return {
      tourFeedbackList: tourData.tourFeedbackList,
      userFeedback: tourData.userFeedback,
    };
  },

  editTourFeedback: async ({ id, feedbackText, userRating }) => {
    const response = await instance.post("https://jsonplaceholder.typicode.com/posts", {
      id,
      feedbackText,
      userRating,
    });

    return {
      tourFeedbackList: tourData.tourFeedbackList,
      userFeedback: tourData.userFeedback,
    };
  },

  deleteTourFeedback: async ({ id }) => {
    const response = await instance.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

    return {
      tourFeedbackList: tourData.tourFeedbackList,
      userFeedback: tourData.userFeedback,
    };
  },

  // Tour Manger Profile API
  fetchTourManagerProfile: async ({ tourManagerId }) => {
    const response = await instance.get(
      "https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=5",
      { tourManagerId }
    );

    return tourManagerData.tourManager;
  },

  fetchTourManagerTourList: async ({ tourManagerId }) => {
    const response = await instance.get(
      "https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=5",
      { tourManagerId }
    );

    return tourManagerData.managerTourList;
  },

  // Profile API
  fetchProfile: async () => {
    const response = await instance.get(
      "https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=5"
    );

    return profileData;
  },

  // Photo Studio API
  fetchPhotoStudioList: async () => {
    const response = await instance.get(
      "https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=5"
    );

    return photoStudioData.photoStudioList;
  },

  fetchPhotoStudioInformation: async ({ studioId }) => {
    const response = await instance.get(
      "https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=5",
      { studioId }
    );

    return photoStudioData.photoStudio;
  },

  fetchStudioPhotoPackage: async ({ studioId }) => {
    const response = await instance.get(
      "https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=5",
      { studioId }
    );

    return photoStudioData.studioPhotoPackage;
  },

  fetchPhotoStudioFeedbackList: async ({ id }) => {
    const response = await instance.get(
      "https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=5",
      { id }
    );

    return {
      tourFeedbackList: photoStudioData.studioFeedbackList,
      userFeedback: photoStudioData.userFeedback,
    };
  },

  addPhotoStudioFeedback: async ({ id, feedbackText, userRating }) => {
    const response = await instance.post("https://jsonplaceholder.typicode.com/posts", {
      id,
      feedbackText,
      userRating,
    });

    return {
      tourFeedbackList: photoStudioData.studioFeedbackList,
      userFeedback: photoStudioData.userFeedback,
    };
  },

  editPhotoStudioFeedback: async ({ id, feedbackText, userRating }) => {
    const response = await instance.post("https://jsonplaceholder.typicode.com/posts", {
      id,
      feedbackText,
      userRating,
    });

    return {
      tourFeedbackList: photoStudioData.studioFeedbackList,
      userFeedback: photoStudioData.userFeedback,
    };
  },

  deletePhotoStudioFeedback: async ({ id }) => {
    const response = await instance.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

    return {
      tourFeedbackList: photoStudioData.studioFeedbackList,
      userFeedback: photoStudioData.userFeedback,
    };
  },
  // User Profile API

  fetchUserProfile: async ({ userId }) => {
    const response = await instance.get(
      "https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=5",
      { userId }
    );

    return userProfileData.userProfile;
  },

  fetchUserFeedbackList: async ({ userId }) => {
    const response = await instance.get(
      "https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=5",
      { userId }
    );

    return userProfileData.userFeedbackList;
  },
};
