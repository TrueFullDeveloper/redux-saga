import { authData, tourData } from "../_fakeData/fakeData";
import axios from "axios";

export const Api = {
  // Auth API
  login: async ({ email, password }) => {
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      email,
      password,
    });

    return authData.userId;
  },

  signup: async ({ email, password, userName }) => {
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      email,
      password,
      userName,
    });

    return authData.userId;
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
};
