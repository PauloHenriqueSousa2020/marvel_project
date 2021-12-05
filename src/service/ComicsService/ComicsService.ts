/* eslint-disable import/no-anonymous-default-export */
import api from "../api";

const service = "/comics";

interface ParamsProps {
  ts: string,
  hash: string,
  apikey: string,
  limit: number,
  offset: number,
  titleStartsWith?: string,
};

const findAll = (params: ParamsProps) => {
  return api.get(`${service}`, { params });
};

export default {
  findAll
}