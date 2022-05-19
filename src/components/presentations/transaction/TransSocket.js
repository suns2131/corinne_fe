import sockjs from 'sockjs-client';
import Stomp from 'stompjs';

const socket = sockjs('https://sparta-jm.site/stomp');
const stpClient = Stomp.over(socket);

export default stpClient;
