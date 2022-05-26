import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const Socket = SockJS('https://gyuwony.shop/stomp');
// const Socket = SockJS('https://sparta-jm.site/stomp');
const socketClient = Stomp.over(Socket);

export default socketClient;
