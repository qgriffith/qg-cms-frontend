import { queryAPI } from '../lib/QueryAPI'
import HomeLayout from '../layouts/HomeLaoyout'
import PostLists from '../layouts/PostList'

export default function Home({home, posts}) {
  return (
    <><HomeLayout>{home}</HomeLayout><PostLists title='Recent Articles'>{posts}</PostLists></>
  )
}
 
export async function getStaticProps() {

  const home = await queryAPI('/homepage', {
    populate: "*"
  })

  const posts = await queryAPI('/articles', {
    sort: {
      publishedAt: 'desc'
    },
    pagination: {
      pageSize: 2
    }
  })
  return {
      props: {
          home,
          posts,    
      },
      revalidate: 500
  }
}