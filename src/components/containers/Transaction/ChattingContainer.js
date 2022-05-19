import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../../../state/reducer/transaction/chat";
import Rooms from "../../presentations/transaction/chatting/Rooms";
import socketClient from "../../../share/socket";
import { getCookie } from "../../../share/cookie"


const usertoken = getCookie({ name: 'corinne' });

function ChattingContainer() {
  const userinfo = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const sendPath = `/pub/chat/message`;
  const [inputMessage, setInputMessage] = React.useState('');

  // 메세지 전송
  const sendMessage = (e) => {
    const today = new Date();
    const sendTm = `${today.getMinutes()}:${today.getSeconds()}`;

    if (e.key === 'Enter') {
      const SendData = {
        type: 'TALK',
        topicName: 'corinnechat',
        nickname: userinfo.nickname,
        imageUrl: userinfo.imageUrl,
        exp: userinfo.exp,
        sendTime: sendTm,
        message: inputMessage,
      };
      socketClient.send(sendPath, {}, JSON.stringify(SendData));
      e.target.value = '';
    }
  };

  React.useEffect(() => {
    socketClient.connect({ token: `BEARER ${usertoken}` }, () => {
      socketClient.subscribe('/sub/topic/corinnechat', (message) => {
        const ChatData = JSON.parse(message.body);
        const updateChat = {
          nickname: ChatData.nickname,
          message: ChatData.message,
        };
        dispatch(addChat(updateChat));
      });

      const connectEnter = {
        type: 'ENTER',
        topicName: 'corinnechat',
        nickname: userinfo.nickname,
        imageUrl: '',
        exp: 0,
        sendTime: '',
        message: '',
      };
      socketClient.send(sendPath, {}, JSON.stringify(connectEnter));
    });

    return () => {
      if (socketClient.connected) {
        // 컴포넌트 종료 시 채팅 구독 취소 / 웹소켓 연결 종료
        socketClient.disconnect(
          () => {
            // socketClient.unsubscribe('sub-0');
          },
          { token: `BEARER ${usertoken}` },
        );
      }
    };
  }, []);
  return <Rooms sendMessage={sendMessage} setInputMessage={setInputMessage} />;
}
export default ChattingContainer;
