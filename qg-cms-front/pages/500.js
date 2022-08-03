// pages/500.js
import { queryAPI } from '../lib/QueryAPI'

export default function Custom500() {
  return <h1>500 - Server-side error occurred</h1>
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