import Link from 'next/link'
import { queryAPI } from '../../lib/QueryAPI'

function Blog({ posts }) {
    return (
      <ul>
        {posts.data.map((post) => (
          <li><Link href={`/blog/post/${encodeURIComponent(post.attributes.slug)}`}>{post.attributes.title}</Link></li>
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

export default Blog