import '../styles/globals.css'
import {SessionProvider} from 'next-auth/react'
import sockjs from "sockjs-client"
import Stomp from 'stompjs'
import wrapper from '../src/state'

const socket = sockjs("http://3.39.187.36:8090/stomp");
const alarmClient = Stomp.over(socket);

alarmClient.connect({}, ()=> {
  console.log('알람 커넥트 완료')
  alarmClient.subscribe(`/sub/topic/1`, (message) =>{
    const returnData = JSON.parse(message.body);
    window.alert(returnData);
  })
})


function MyApp({ Component, pageProps : {session, ...pageProps} }) {
  return <Component {...pageProps} />

}

export default wrapper.withRedux(MyApp);
