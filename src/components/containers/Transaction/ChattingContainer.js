import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../../../state/reducer/transaction/chat';
import Rooms from '../../presentations/transaction/chatting/Rooms';
import socketClient from '../../../share/socket';
import { getCookie } from '../../../share/cookie';
import { selectedUserInfo } from '../../../state/reducer/user/selectors';

const usertoken = getCookie({ name: 'corinne' });

function ChattingContainer({ userInfos }) {
  console.log(`userInfos`);
  console.log(userInfos);
  const userinfo = useSelector(selectedUserInfo);
  const dispatch = useDispatch();
  const sendPath = `/pub/chat/message`;
  const [inputMessage, setInputMessage] = React.useState('');
  const connectCheckRef = useRef(null);
  const messageRef = useRef(null);

  // 메세지 전송
  const sendMessage = (e) => {
    const today = new Date();
    const sendTm = `${today.getHours()}:${today.getMinutes()}`;
    console.log(sendTm);
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

  const sendBtn = () => {
    const today = new Date();
    const sendTm = `${today.getHours()}:${today.getMinutes()}`;

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
    messageRef.current.value = null;
  };

  const subscribeConnect = () => {
    console.log(`timer2`);
    console.log(userInfos);
    connectCheckRef.current = true;
    socketClient.subscribe('/sub/topic/corinnechat', (message) => {
      const ChatData = JSON.parse(message.body);
      const updateChat = {
        nickname: ChatData.nickname,
        time: ChatData.sendTime,
        imageUrl:
          ChatData.imageUrl === 'null'
            ? '/images/defaultProfile/defalutProfile32.png'
            : ChatData.imageUrl,
        message: ChatData.message,
      };
      dispatch(addChat(updateChat));
    });

    const connectEnter = {
      type: 'ENTER',
      topicName: 'corinnechat',
      nickname: userInfos.nickname,
      imageUrl: '',
      exp: 0,
      sendTime: '',
      message: '',
    };
    socketClient.send(sendPath, {}, JSON.stringify(connectEnter));
  };

  React.useEffect(() => {
    const intervals = setInterval(() => {
      if (userInfos !== null) {
        // if (usertoken !== '' && socketClient.connected === true) console.log('tytt');
        if (usertoken !== '' && socketClient.connected === true) {
          if (connectCheckRef.current === null) subscribeConnect();
        }
      }
    }, 1000);

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
      clearTimeout(intervals);
    };
  }, [dispatch, userinfo]);

  return (
    <Rooms
      sendMessage={sendMessage}
      setInputMessage={setInputMessage}
      sendBtn={sendBtn}
      messageRef={messageRef}
    />
  );
}
export default ChattingContainer;
