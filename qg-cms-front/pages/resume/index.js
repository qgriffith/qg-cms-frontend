import { queryAPI } from '../../lib/QueryAPI'
import ResumeLayout from '../../layouts/ReusmeLayout'


function Resume({ resume }) {
    console.log(resume.data.attributes.hero)
    return (
     <ResumeLayout>{resume.data}</ResumeLayout>
    )
  }

export async function getStaticProps() {
    const global = await queryAPI('/global', {
        populate: "*"
      })
    const resume = await queryAPI('/resume', {
        populate: "*"
    })
    const navbar = await queryAPI('/navbars')
    return {
        props: {
            resume,
            global: global.data,
            navbar: navbar.data
        },
        revalidate: 500
    }
}

export default Resume
