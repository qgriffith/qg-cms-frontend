import axios from 'axios'
import Link from 'next/link'
import getStrapiURL from '../../lib/GetStrapiURL'

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
    const res = await axios.request(getStrapiURL('/api/articles'))
    const posts = await res.data
    return {
        props: {
            posts,
        }
    }
}

export default Blog