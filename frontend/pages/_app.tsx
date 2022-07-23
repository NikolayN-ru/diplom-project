import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../src/footer'
import Header from '../src/header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header link='header-links' />
      <Component {...pageProps} />
      <Footer link='footer-links' />
    </>
  )
}

export default MyApp
