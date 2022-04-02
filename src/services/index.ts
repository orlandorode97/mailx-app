import axios from "axios";
import { BASE_URL } from "constants/common";
const client = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default client;
