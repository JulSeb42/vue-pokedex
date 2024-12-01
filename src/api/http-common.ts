/*=============================================== HTTP Common ===============================================*/

/*
    Create API link
*/

import axios from "axios"
import { API_URL } from "@/router/paths"

export const http = axios.create({
    baseURL: API_URL,
    headers: { "Content-type": "application/json" },
})
