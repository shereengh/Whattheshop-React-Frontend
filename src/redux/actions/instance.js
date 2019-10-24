import axios from "axios";

const instance = axios.create({
  baseURL: "  http://2e9b1cfd.ngrok.io/api/"
});
export default instance;
