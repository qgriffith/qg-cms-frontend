import axios from "axios"
import { useRouter } from "next/router"

// router is required for fallback: true
const Article = ({ post }) => {
    const router = useRouter();
  
    if (router.isFallback) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
      <h1>Post page</h1>
      <h2>{post.attributes.title}</h2>
      <p>{post.attributes.content}</p>
      <p>{post.attributes.writer.data.attributes.name}</p>
    </div>

    )
  }

  export default Article

  export async function getStaticProps({ params }) {
    const res = await axios.request(`http://127.0.0.1:1337/api/articles/?populate=*&?filters[slug]=${params.slug}`);
    const post = await res.data.data[0]


    return {
      props: {
        post,
      },
    }
  }

  export async function getStaticPaths() {
    const res = await axios.request("http://127.0.0.1:1337/api/articles")
    const posts = await res.data
    const paths = posts.data.map((post) => ({ params: { slug: post.attributes.slug} }))
    return {
      paths,
      fallback: true,
    };
  };