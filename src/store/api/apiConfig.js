import axios from "axios";
import { USER_TOKEN } from "../../config/constans";

export const instance = axios.create({
  headers: { accessToken: localStorage.getItem(USER_TOKEN) },
});
