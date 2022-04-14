import axios from "axios";
import { API_DOMAIN } from "./constant";

const token = localStorage.getItem('token')

export default axios.create({
    baseURL: API_DOMAIN,
    headers : {
        authorization : token
    }
});