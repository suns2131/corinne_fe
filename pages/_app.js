import '../styles/globals.css'
import {SessionProvider} from 'next-auth/react'
import sockjs from "sockjs-client"
import Stomp from 'stompjs'
import wrapper from '../src/state'

const socket = sockjs("http://52.79.228.83:8090/stomp");
const alarmClient = Stomp.over(socket);

alarmClient.connect({}, ()=> {
  alarmClient.subscribe(`/sub/topic/Alarm`, (message) =>{
    const returnData = JSON.parse(message.body);
    window.alert(returnData);
  })
})


function MyApp({ Component, pageProps : {session, ...pageProps} }) {
  return <Component {...pageProps} />

}

export default wrapper.withRedux(MyApp);
