// pages/404.js
import { queryAPI } from '../lib/QueryAPI'

export default function Custom404() {
    return <h1>404 - Page Not Found</h1>
  }

  export async function getStaticProps() {
    const global = await queryAPI('/global', {
      populate: "*"
    })
    const navbar = await queryAPI('/navbars')

    return {
        props: {
            global: global.data,
            navbar: navbar.data
        },
        revalidate: 500
    }
}