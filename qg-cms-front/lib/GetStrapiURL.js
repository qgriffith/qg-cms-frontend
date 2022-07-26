export default function getStrapiURL(path = "") {
    return `${
      process.env.STRAPI_API_URL || "http://localhost:1337"
    }${path}`
  }