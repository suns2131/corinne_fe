import React, { useEffect } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { getCookie } from '../src/share/cookie';

const usertoken = getCookie({ name: 'corinne' });

export default function RankPage() {
  // const Socket = SockJS('https://sparta-jm.site/stomp');
  const Socket = SockJS('http://52.78.173.104:8080/stomp');
  const socketClient = Stomp.over(Socket);
  const sendPath = `/pub/chat/message`;

  useEffect(() => {
    if (socketClient.connected === false) {
      socketClient.connect({ token: `BEARER ${usertoken}` }, () => {
        socketClient.subscribe(`/sub/topic/corinnechat`, (message) => {
          const AlramData = JSON.parse(message.body);
        });
      });
      // const today = new Date();
      // let hours = today.getHours();
      // let minues = today.getMinutes();
      // if (hours.toString().length === 1) hours = `0${hours}`;
      // if (minues.toString().length === 1) minues = `0${minues}`;
      // const sendTm = `${hours}:${minues}`;
      // const connectEnter = {
      //   type: 'ENTER',
      //   topicName: 'corinnechat',
      //   nickname: 'test',
      //   imageUrl: null,
      //   exp: 0,
      //   sendTime: sendTm,
      //   message: '',
      // };
      // socketClient.send(sendPath, {}, JSON.stringify(connectEnter));
    }
    return () => {
      socketClient.disconnect();
    };
  }, []);

  return <div>연결 확인</div>;
}
