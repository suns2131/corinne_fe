import sockjs from "sockjs-client"
import Stomp from 'stompjs'


const socket = sockjs("http://3.39.187.36:8090/stomp");
const stpClient = Stomp.over(socket);



export default stpClient;
