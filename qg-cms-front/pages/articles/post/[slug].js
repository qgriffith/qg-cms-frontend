import { useRouter } from "next/router"
import PostLayout from "../../../layouts/PostLayout"
import { queryAPI } from "../../../lib/QueryAPI"

// router is required for fallback: true
const Article = ({ post }) => {
    const router = useRouter();
  
    if (router.isFallback) {
      return <div>Loading...</div>;
    }
  
    return (
      <PostLayout>{post}</PostLayout>
      
    )
  }

  export default Article
  
  export async function getStaticProps({ params }) {
    const post = await queryAPI('/articles', {
      filters: {
        slug: params.slug
      },
      populate: {
        writer: {
          populate: "*",
        },
      },
    })
    return {
      props: {
        post: post.data[0],
      },
      revalidate: 500
    }
  }

  export async function getStaticPaths() {
    const posts = await queryAPI("/articles")
    const paths = posts.data.map((post) => ({ params: { slug: post.attributes.slug} }))
    return {
      paths,
      fallback: true,
    };
  };