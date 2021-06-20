import type { AppProps } from 'next/app'
import { ReactQueryProvider } from '../components/react-query-provider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider>
      <Component {...pageProps} />
    </ReactQueryProvider>
  )
}
export default MyApp
