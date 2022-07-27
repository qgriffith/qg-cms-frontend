import qs from "qs"
import axios from "axios"
import getStrapiURL from "./GetStrapiURL"

export async function queryAPI(path, urlParamsObject = {}, options = {}) {

  // Build request URL
    const queryString = qs.stringify(urlParamsObject)
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`
  
    // Trigger API call
    const response = await axios.request(requestUrl, options)

    // Handle response
    if (response.statusText =! 'OK') {
      console.error(response.statusText)
      throw new Error(`An error occured please try again`)
    }
    const data = await response.data
    return data
  }