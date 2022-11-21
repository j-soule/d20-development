import Head from 'next/head'
import {DefaultLayout} from './../components/layouts'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  </Head>
  <DefaultLayout>
  <Component {...pageProps} />
  </DefaultLayout>
  </>
  )
}

export default MyApp
