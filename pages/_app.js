import '../styles/globals.css'
import {SessionProvider} from 'next-auth/react'
import sockjs from "sockjs-client"
import Stomp from 'stompjs'
import wrapper from '../src/state'

const socket = sockjs("http://13.125.232.165:8090/stomp");
const alarmClient = Stomp.over(socket);

alarmClient.connect({token : "BEARER eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFWFBJUkVEX0RBVEUiOjE2NTIyNjkzMjcsIlVTRVJfRU1BSUwiOiJhQG5hdmVyLmNvbSIsImlzcyI6InNwYXJ0YSIsIkNMQUlNX1VTRVJfTklDS05BTUUiOiLquYDshLHsp4QifQ.5MVuc5ERTcK-keMryiH-JxUvZgODITR89BS-ddkZpHM"}, ()=> {
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
