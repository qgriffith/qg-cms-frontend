// pages/500.js
import { queryAPI } from '../lib/QueryAPI'

export default function Custom500() {
  return <h1>500 - Server-side error occurred</h1>
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