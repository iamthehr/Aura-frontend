import axios from "axios";

const instance = axios.create({
  baseURL: "https://aura-backend-00h1.onrender.com/",
});

export default instance;
