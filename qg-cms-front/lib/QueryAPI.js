import qs from "qs"
import axios from "axios"
import getStrapiURL from "./GetStrapiURL"
import { data } from "autoprefixer"

export async function queryAPI(path, urlParamsObject = {}, options = {}) {
    // Merge default and user options
    const mergedOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    }
  
    // Build request URL
    const queryString = qs.stringify(urlParamsObject)
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`
  
    // Trigger API call
    const response = await axios.get(requestUrl, mergedOptions)
  
    // Handle response
    if (!response.ok) {
      console.error(response.statusText)
      throw new Error(`An error occured please try again`)
    }
    const data = await data.data
    return data
  }