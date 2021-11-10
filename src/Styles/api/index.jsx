import axios from "axios";

const Api = axios.create({
  baseURL: "https://home-pets.herokuapp.com/",
});

export default Api;
