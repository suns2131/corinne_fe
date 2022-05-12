import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

const Socket = SockJS("http://13.125.232.165:8090/stomp");
const socketClient = Stomp.over(Socket);

export default socketClient;