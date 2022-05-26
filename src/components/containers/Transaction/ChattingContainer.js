import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../../../state/reducer/transaction/chat';
import Rooms from '../../presentations/transaction/chatting/Rooms';
import socketClient from '../../../share/socket';
import { selectedUserInfo } from '../../../state/reducer/user/selectors';
import { getCookie } from '../../../share/cookie';

const usertoken = getCookie({ name: 'corinne' });

function ChattingContainer({ userInfos }) {
  const userinfo = useSelector(selectedUserInfo);
  const chkConneted = useSelector((state) => state.trans.socketConnected);
  const questclear = useSelector((state) => state.rank.userQuest);
  const dispatch = useDispatch();
  const sendPath = `/pub/chat/message`;
  const [inputMessage, setInputMessage] = React.useState('');
  const connectCheckRef = useRef(null);
  const messageRef = useRef(null);

  // 메세지 전송
  const sendMessage = (e) => {
    const today = new Date();
    let hours = today.getHours();
    let minues = today.getMinutes();
    if (hours.toString().length === 1) hours = `0${hours}`;
    if (minues.toString().length === 1) minues = `0${minues}`;
    const sendTm = `${hours}:${minues}`;
    const checkClear = questclear.filter((el) => el.questNo === 6);
    const clear6 = checkClear.length > 1 ? checkClear.clear : false;

    if (e.key === 'Enter') {
      const SendData = {
        type: 'TALK',
        topicName: 'corinnechat',
        userId: userinfo.userId,
        nickname: userinfo.nickname,
        imageUrl: userinfo.imageUrl,
        exp: userinfo.exp,
        sendTime: sendTm,
        clear: clear6,
        message: inputMessage,
      };
      socketClient.send(sendPath, { token: `BEARER ${usertoken}` }, JSON.stringify(SendData));
      e.target.value = '';
    }
  };

  const sendBtn = () => {
    const today = new Date();
    let hours = today.getHours();
    let minues = today.getMinutes();
    if (hours.toString().length === 1) hours = `0${hours}`;
    if (minues.toString().length === 1) minues = `0${minues}`;
    const sendTm = `${hours}:${minues}`;
    const checkClear = questclear.filter((el) => el.questNo === 6);
    const clear6 = checkClear.length > 1 ? checkClear.clear : false;

    const SendData = {
      type: 'TALK',
      topicName: 'corinnechat',
      userId: userinfo.userId,
      nickname: userinfo.nickname,
      imageUrl: userinfo.imageUrl,
      exp: userinfo.exp,
      sendTime: sendTm,
      clear: clear6,
      message: inputMessage,
    };
    socketClient.send(sendPath, { token: `BEARER ${usertoken}` }, JSON.stringify(SendData));
    messageRef.current.value = null;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const subscribeConnect = () => {
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
    const today = new Date();
    let hours = today.getHours();
    let minues = today.getMinutes();
    if (hours.toString().length === 1) hours = `0${hours}`;
    if (minues.toString().length === 1) minues = `0${minues}`;
    const sendTm = `${hours}:${minues}`;
    const connectEnter = {
      type: 'ENTER',
      topicName: 'corinnechat',
      nickname: userInfos.nickname,
      imageUrl:
        userInfos.imageUrl === 'null'
          ? '/images/defaultProfile/defalutProfile32.png'
          : userInfos.imageUrl,
      exp: userInfos.exp,
      sendTime: sendTm,
      message: '',
    };
    socketClient.send(sendPath, {}, JSON.stringify(connectEnter));
  };

  React.useEffect(() => {
    if (chkConneted && connectCheckRef.current === null) subscribeConnect();
  }, [chkConneted, subscribeConnect]);

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
