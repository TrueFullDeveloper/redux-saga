import { authData } from "../_fakeData/fakeData";
import axios from "axios";

export const Api = {
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
};
