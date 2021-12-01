/* eslint-disable import/no-anonymous-default-export */
import api from "../api";
import md5 from "md5";

const service = "/comics";

const ts = Number(new Date());
const privateKey = "9102064c4c4d1d499e2340eeb02f41b065622583"
const publicKey = "aa5a981963fa6f57eeb88dc2be8fc61b"

const hash = md5(ts + privateKey + publicKey);

const findAll = (params = {}) => {
  return api.get(`${service}?ts=${ts}&apikey=${publicKey}&hash=${hash}`, { params });
};

export default {
  findAll
}