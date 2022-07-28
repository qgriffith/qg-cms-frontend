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
    .catch(function(error) {
      if (error.response) {
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.headers);
      } else if (error.request) {
        console.error(error.request);
      } else {
        console.error("Error", error.message);
        throw new Error(`An error occured please try again`)
      }      
    })

    const data = await response.data
    return data
  }