import '../styles/globals.css'
import '../styles/prism.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Layout from '../layouts/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
  
}

export default MyApp
