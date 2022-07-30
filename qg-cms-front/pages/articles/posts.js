import { queryAPI } from '../../lib/QueryAPI'
import PostLists from '../../layouts/PostList'

function Articles({ posts }) {
    return (
      <PostLists>{posts}</PostLists>
    )
  }

export async function getStaticProps() {
    const posts = await queryAPI('/articles')
    return {
        props: {
            posts,
        }
    }
}

export default Articles