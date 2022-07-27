import axios from "axios"
import getStrapiURL from "../../../lib/GetStrapiURL"
import { useRouter } from "next/router"

const Tag = ({tag}) => {
    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading...</div>
      }
    return (
        <ul>
        {tag.attributes.articles.data.map((post) => (
          <li>{post.attributes.title}</li>
        ))}
      </ul>     
    )  
}

export async function getStaticProps({ params }) {
    const res = await axios.request(getStrapiURL(`/api/tags/?populate=*&?filters[slug]=${params.slug}`));
    const tag = await res.data.data[0]

    return {
      props: {
        tag,
      },
    }
  }

  export async function getStaticPaths() {
    const res = await axios.request(getStrapiURL("/api/tags"))
    const tags = await res.data
    const paths = tags.data.map((tag) => ({ params: { slug: tag.attributes.slug} }))
    return {
      paths,
      fallback: true,
    }
  }  

export default Tag