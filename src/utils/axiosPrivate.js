/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios"

const axiosPrivate = axios.create({ baseURL: "https://dummyjson.com/" })

const getToken = localStorage.getItem("recoil-persist")
const token = JSON.parse(getToken)

axiosPrivate.interceptors.request.use(
  async (config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token.auth}`
    }

    return config
  },
  function (error) {
    console.log(error)

    return Promise.reject(error)
  }
)

// Add a response interceptor
axiosPrivate.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log(error.config)

    return Promise.reject(error)
  }
)

export default axiosPrivate
