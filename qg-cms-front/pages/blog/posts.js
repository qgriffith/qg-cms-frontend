import axios from 'axios'
function Blog({ posts }) {
    return (
      <ul>
        {posts.data.map((post) => (
          <li>{post.attributes.title}</li>
        ))}
      </ul>
    )
  }

export async function getStaticProps() {
    const res = await axios.request('http://127.0.0.1:1337/api/articles')
    const posts = await res.data
    return {
        props: {
            posts,
        }
    }
}

export default Blog