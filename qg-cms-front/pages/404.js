// pages/404.js
import { queryAPI } from '../lib/QueryAPI'

export default function Custom404() {
    return <h1>404 - Page Not Found</h1>
  }

  export async function getStaticProps() {
    const global = await queryAPI('/global', {
      populate: "*"
    })
    return {
        props: {
            global: global.data
        },
        revalidate: 500
    }
}