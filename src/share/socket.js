import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

const Socket = SockJS("https://gyuwony.shop:8090/stomp");
const socketClient = Stomp.over(Socket);

export default socketClient;