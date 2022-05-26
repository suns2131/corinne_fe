import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const Socket = SockJS('https://sparta-jm.site/stomp');
// const Socket = SockJS('http://52.78.173.104:8080/stomp');
const socketClient = Stomp.over(Socket);

export default socketClient;
