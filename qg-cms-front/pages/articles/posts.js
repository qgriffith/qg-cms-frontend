import Link from 'next/link'
import { queryAPI } from '../../lib/QueryAPI'

function Articles({ posts }) {
    return (
      <ul>
        {posts.data.map((post) => (
          <li><Link href={`/articles/post/${encodeURIComponent(post.attributes.slug)}`}>{post.attributes.title}</Link></li>
        ))}
      </ul>
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