import { authData } from "../fakeData/fakeData";

export const Api = {
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
};
