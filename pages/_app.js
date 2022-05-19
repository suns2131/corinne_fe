import '../styles/globals.css';
import wrapper from '../src/state';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
