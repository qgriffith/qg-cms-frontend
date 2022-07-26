import getStrapiURL from "./GetStrapiURL"

export default function getStrapiMedia(url) {
    const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url
    return imageUrl
  }