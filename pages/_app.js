import '../styles/globals.css'
import {SessionProvider} from 'next-auth/react'
import wrapper from '../src/state'

function MyApp({ Component, pageProps : {session, ...pageProps} }) {
  return <SessionProvider session={session}><Component {...pageProps} /></SessionProvider>
  
}

export default wrapper.withRedux(MyApp);
