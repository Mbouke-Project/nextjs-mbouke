import { Provider } from 'next-auth/client'
import '../styles/globals.sass'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
  <Provider session={pageProps.session}>
    <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp
