import { queryAPI } from '../../lib/QueryAPI'
import AboutLayout from '../../layouts/AboutLayout'

function About({ about }) {
    return (
      <AboutLayout>{about}</AboutLayout>
    )
  }

export async function getStaticProps() {
    const global = await queryAPI('/global', {
        populate: "*"
      })
    const about = await queryAPI('/about', {
        populate: "*"
    })
    const navbar = await queryAPI('/navbars')
    return {
        props: {
            about,
            global: global.data,
            navbar: navbar.data
        }
    }
}

export default About