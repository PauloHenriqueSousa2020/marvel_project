import md5 from "md5";

const ts = Number(new Date());
const privateKey = process.env.REACT_APP_PRIVATE_KEY as string
const apikey = "aa5a981963fa6f57eeb88dc2be8fc61b"

const hash = md5(ts + privateKey + apikey);

console.log("privateKey: ", privateKey)
console.log("apikey: ", apikey)
const params = {
  ts,
  hash,
  apikey
}

export default params;