import md5 from "md5";

const ts = Number(new Date());
const privateKey: any = process.env.REACT_APP_PRIVATE_KEY 
const apikey: any = process.env.REACT_APP_API_KEY 

const hash = md5(ts + privateKey + apikey);

console.log("privateKey, privateKey, privateKey: ", privateKey)
console.log("apikey, apikey, apikey: ", apikey)
const params = {
  ts,
  hash,
  apikey
}

export default params;