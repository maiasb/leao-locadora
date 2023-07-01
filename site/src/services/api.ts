import axios from 'axios'

const baseURL = import.meta.env.VITE_BASE_URL
const responseType = 'json'

const api = axios.create({
  baseURL,
  responseType,
})

export default api
