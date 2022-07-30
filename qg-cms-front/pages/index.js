import { queryAPI } from '../lib/QueryAPI'
import HomeLayout from '../layouts/HomeLaoyout'

export default function Home({home}) {
  return (
    <HomeLayout>{home}</HomeLayout>
  )
}
 
export async function getStaticProps() {
  const home = await queryAPI('/homepage', {
    populate: "*"
  })
  console.log(home.hero)
  return {
      props: {
          home,
      }
  }
}