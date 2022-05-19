import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const Socket = SockJS('sparta-jm.site:8090/stomp');
const socketClient = Stomp.over(Socket);

export default socketClient;
