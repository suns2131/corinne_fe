import '../styles/globals.css'
import wrapper from '../src/state'
import sockjs from "sockjs-client"
import Stomp from 'stompjs'

const socket = sockjs("http://3.39.187.36:8090/stomp");
const alarmClient = Stomp.over(socket);

alarmClient.connect({}, ()=> {
  console.log('알람 커넥트 완료')
  alarmClient.subscribe(`/sub/topic/1`, (message) =>{
    const returnData = JSON.parse(message.body);
    window.alert(returnData);
  })
})

function MyApp({ Component, pageProps }) {
  return <Component ponent {...pageProps} />;
}


export default wrapper.withRedux(MyApp);
