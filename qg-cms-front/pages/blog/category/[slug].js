import axios from "axios"
import getStrapiURL from "../../../lib/GetStrapiURL"
import { useRouter } from "next/router"

const Category = ({category}) => {
    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading...</div>
      }
    return (
        <ul>
        {category.attributes.articles.data.map((post) => (
          <li>{post.attributes.title}</li>
        ))}
      </ul>     
    )  
}

export async function getStaticProps({ params }) {
    const res = await axios.request(getStrapiURL(`/api/categories/?populate=*&?filters[slug]=${params.slug}`));
    const category = await res.data.data[0]

    return {
      props: {
        category,
      },
    }
  }

  export async function getStaticPaths() {
    const res = await axios.request("http://127.0.0.1:1337/api/categories")
    const categories = await res.data
    const paths = categories.data.map((category) => ({ params: { slug: category.attributes.slug} }))
    return {
      paths,
      fallback: true,
    }
  }  

export default Category