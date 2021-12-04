import axios from "axios";
import params from "./global";

const api = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public/",
  params
});

export default api;