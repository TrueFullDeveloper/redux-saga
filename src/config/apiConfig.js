import axios from "axios";
import { USER_TOKEN } from "./constans";
export const instance = axios.create({
  headers: { accessToken: localStorage.getItem(USER_TOKEN) },
});
