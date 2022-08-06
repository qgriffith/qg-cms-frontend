import { queryAPI } from '../lib/QueryAPI'
import HomeLayout from '../layouts/HomeLaoyout'
import PostLists from '../layouts/PostList'

export default function Home({home, posts}) {
  return (
    <><HomeLayout>{home}</HomeLayout><PostLists title='Recent Articles'>{posts}</PostLists></>
  )
}
 
export async function getStaticProps() {
  const global = await queryAPI('/global', {
    populate: "*"
  })
  const home = await queryAPI('/homepage', {
    populate: "*"
  })

  const navbar = await queryAPI('/navbars')

  const posts = await queryAPI('/articles', {
    sort: {
      publishedAt: 'desc'
    },
    pagination: {
      pageSize: 3
    },
    populate: 'tags'
  })
  return {
      props: {
          home,
          posts,
          global: global.data,
          navbar: navbar.data
      },
      revalidate: 500
  }
}