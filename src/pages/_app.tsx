import 'styles/globals.scss'
import 'papercss'
import type { AppProps } from 'next/app'
import Layout from 'components/Layout'
import { AppWrapper } from '../context/state'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  )
}

export default MyApp
