import md5 from "md5";

const ts = Number(new Date());
const privateKey = process.env.REACT_APP_PRIVATE_KEY as string
const apikey = process.env.REACT_APP_API_KEY

const hash = md5(ts + privateKey + apikey);

const params = {
  ts,
  hash,
  apikey
}

export default params;