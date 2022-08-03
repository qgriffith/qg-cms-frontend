import '../styles/globals.css'
import '../styles/prism.css'
import { ThemeProvider } from 'next-themes'
import App from "next/app"
import Head from 'next/head'
import Layout from '../layouts/Layout'
import { queryAPI } from '../lib/QueryAPI'
import { createContext } from "react"
import getStrapiMedia from '../lib/GetStrapiMedia'

function MyApp({ Component, pageProps }) {
  const { global } = pageProps
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>{global.attributes.defaultSEO.metaTitle}</title>
        <meta property="og:title" content={global.attributes.defaultSEO.metaTitle} />
        <meta property="og:description" content={global.attributes.defaultSEO.metaDescription} />
        <meta name="description" content={global.attributes.defaultSEO.metaDescription} />
        <meta name="image" content={getStrapiMedia(global.attributes.siteLogo.data.attributes.url)} />
        <meta name="og:image" content={getStrapiMedia(global.attributes.siteLogo.data.attributes.url)} />
        <link rel="shortcut icon" href={getStrapiMedia(global.attributes.favicon.data.attributes.url)} />
      </Head>
      <Layout global={global}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
  
}

MyApp.getInitialProps = async (ctx) => {
 // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi
  const global = await queryAPI('/global', {
      populate: "*"
    }
  )
  return { ...appProps, pageProps: { global: global.data } }
}



export default MyApp
