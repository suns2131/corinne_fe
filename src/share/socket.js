import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const Socket = SockJS('http://52.79.142.108:8090/stomp');
const socketClient = Stomp.over(Socket);

export default socketClient;
