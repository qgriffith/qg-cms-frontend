import '../styles/globals.css'
import '../styles/prism.css'
import { ThemeProvider } from 'next-themes'
import Layout from '../layouts/Layout'
import Head from 'next/head'
import getStrapiMedia from '../lib/GetStrapiMedia'

function MyApp({ Component, pageProps }) {
  const global = pageProps.global
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

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
  
}


export default MyApp

