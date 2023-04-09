import axios from "axios";

axios.defaults.baseURL = "https://utraknaren-front.herokuapp.com"; 

axios.defaults.withCredentials = true;


export const axiosReq = axios.create();
export const axiosRes = axios.create();