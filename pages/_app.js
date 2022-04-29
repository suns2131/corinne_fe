import '../styles/globals.css'
import propTypes from 'prop-types'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.propTypes = {
  Component : propTypes.node.isRequired,
  pageProps : propTypes.node.isRequired,
}

export default MyApp
