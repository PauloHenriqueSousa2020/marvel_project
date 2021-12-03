/* eslint-disable import/no-anonymous-default-export */
import api from "../api";

const service = "/comics";

const findAll = (params = {}) => {
  return api.get(`${service}`, { params });
};

export default {
  findAll
}