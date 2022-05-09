import sockjs from "sockjs-client"
import Stomp from 'stompjs'


const socket = sockjs("http://13.125.232.165:8090/stomp");
const stpClient = Stomp.over(socket);



export default stpClient;
