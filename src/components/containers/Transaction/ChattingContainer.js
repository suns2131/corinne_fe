import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../../../state/reducer/transaction/chat";
import Rooms from "../../presentations/transaction/chatting/rooms";
import socketClient from "../../../share/socket";

function ChattingContainer() {
    const userinfo = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const sendPath = `/pub/chat/message`
    const [inputMessage,setInputMessage] = React.useState('');

    // 메세지 전송
    const sendMessage = (e) => {
        const today = new Date();
        const sendTm = `${today.getMinutes()}:${today.getSeconds()}`;

        if(e.key === "Enter")
        {
          const SendData = {
            type : 'TALK',
            topicName : 'corinnechat',
            nickname : userinfo.nickname,
            imageUrl : userinfo.imageUrl,
            exp : userinfo.exp,
            sendTime : sendTm,
            message :inputMessage,
          }
          socketClient.send(sendPath,{},JSON.stringify(SendData));
          e.target.value = '';
        }
    }

    React.useEffect(() => {
        socketClient.connect({token: "BEARER eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFWFBJUkVEX0RBVEUiOjE2NTI1MDE4MDEsImlzcyI6InNwYXJ0YSIsIlVTRVJfSUQiOjF9.WHQYMiQ6jPAoDfBYUsaXREIAdywtW6k53343Ks7Gz34"}, () => {
            socketClient.subscribe("/sub/topic/corinnechat" , (message) => {
                const ChatData = JSON.parse(message.body);
                const updateChat = {
                    nickname : ChatData.nickname,
                    message : ChatData.message,
                  }
                  dispatch(addChat(updateChat));    
            })

            const connectEnter = {
                type : 'ENTER',
                topicName : 'corinnechat',
                nickname : userinfo.nickname,
                imageUrl : '',
                exp : 0,
                sendTime : '',
                message :'',
              }
              socketClient.send(sendPath,{},JSON.stringify(connectEnter))
        })

        return () => {
            if(socketClient.connected)
            {
                // 컴포넌트 종료 시 채팅 구독 취소 / 웹소켓 연결 종료
                socketClient.disconnect(() => {
                    // socketClient.unsubscribe('sub-0');
                  },{token: "BEARER eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFWFBJUkVEX0RBVEUiOjE2NTI1MDE4MDEsImlzcyI6InNwYXJ0YSIsIlVTRVJfSUQiOjF9.WHQYMiQ6jPAoDfBYUsaXREIAdywtW6k53343Ks7Gz34"});
            }
        }
    },[])
    return (
        <Rooms 
          sendMessage={sendMessage}
          setInputMessage={setInputMessage}  
        />
    );
}
export default ChattingContainer