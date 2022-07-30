import { queryAPI } from '../../lib/QueryAPI'
import AboutLayout from '../../layouts/AboutLayout'

function About({ about }) {
    return (
      <AboutLayout>{about}</AboutLayout>
    )
  }

export async function getStaticProps() {
    const about = await queryAPI('/about', {
        populate: "*"
    })
    return {
        props: {
            about,
        }
    }
}

export default About