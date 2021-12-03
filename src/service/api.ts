import axios from 'axios';
import md5 from "md5";

const ts = Number(new Date());
const privateKey = "9102064c4c4d1d499e2340eeb02f41b065622583"
const apikey = "aa5a981963fa6f57eeb88dc2be8fc61b"

const hash = md5(ts + privateKey + apikey);

const api = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public/",
  params: {
    ts,
    hash,
    apikey
  }
});

export default api;