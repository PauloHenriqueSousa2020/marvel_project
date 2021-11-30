/* eslint-disable import/no-anonymous-default-export */
import api from "../api";

const service = "/comics";

const findAll = (params = {}) => {
  return api.get(`${service}?ts=1616179034&apikey=c22ba519d36ef5d64b7c341b94e6c7f9&hash=8a8b24fa59c32ba7bb0920b0c2721d86`, { params });

};

export default {
  findAll
}