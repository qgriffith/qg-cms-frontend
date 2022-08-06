import { queryAPI } from '../../lib/QueryAPI'
import PostLists from '../../layouts/PostList'

function Articles({ posts }) {
    return (
      <PostLists>{posts}</PostLists>
    )
  }

export async function getStaticProps() {
    const global = await queryAPI('/global', {
      populate: "*"
    })
    const posts = await queryAPI('/articles', {
      populate: {
        tags: "*"
      },
      sort: {
        publishedAt: 'desc'
      },
    })
    const navbar = await queryAPI('/navbars')

    return {
        props: {
            posts,
            global: global.data,
            navbar: navbar.data
        },
        revalidate: 500
    }
}

export default Articles