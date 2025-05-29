import axios from "axios";

const BASE_URL = process.env.BASE_API_URL

export const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})