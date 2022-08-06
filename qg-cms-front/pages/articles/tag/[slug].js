import { useRouter } from "next/router"
import { queryAPI } from "../../../lib/QueryAPI"
import PostLists from "../../../layouts/PostList"

const Tag = ({tag}) => {
    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading...</div>
      }
    return (
      <PostLists title={`Articles for ${tag.attributes.name}`}>{tag.attributes.articles}</PostLists>
    )  
}

export async function getStaticProps({ params }) {
    const global = await queryAPI('/global', {
      populate: "*"
    })
    const tag = await queryAPI("/tags", {
      filters: {
        slug: params.slug
      },
      populate: {
        tags: "*",
        articles: {
          populate: 'tags'
        }
      }
    })
    const navbar = await queryAPI('/navbars')
    return {
      props: {
        tag: tag.data[0],
        global: global.data,
        navbar: navbar.data
      },
      revalidate: 500
    }
  }

  export async function getStaticPaths() {
    const tags = await queryAPI("/tags")
    const paths = tags.data.map((tag) => ({ params: { slug: tag.attributes.slug} }))
    return {
      paths,
      fallback: 'blocking',
    }
  }  

export default Tag