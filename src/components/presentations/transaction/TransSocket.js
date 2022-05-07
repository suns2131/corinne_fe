import sockjs from "sockjs-client"
import Stomp from 'stompjs'


const socket = sockjs("http://52.79.228.83:8090/stomp");
const stpClient = Stomp.over(socket);



export default stpClient;
