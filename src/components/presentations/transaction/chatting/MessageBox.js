import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectedUserInfo } from '../../../../state/reducer/user/selectors';
import styles from './Messages.module.css';

function MessageBox() {
  const chattingData = useSelector((state) => state.chat.ChatMessage);
  const userinfo = useSelector(selectedUserInfo);
  console.log(userinfo);
  const scrollref = useRef(null);

  const scrollToBottom = () => {
    scrollref.current.scrollTop = scrollref.current.scrollHeight;
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [chattingData]);

  return (
    <div className={styles.MessageDiv} ref={scrollref}>
      {chattingData &&
        chattingData.map((el, idx) => (
          <ul>
            {userinfo.nickname === el.nickname ? (
              // eslint-disable-next-line react/no-array-index-key
              <div key={idx} className={styles.MyMessage}>
                <div className={styles.MyMessageImage} />
                <div>
                  <p className={styles.MyMessageNickname}>{el.nickname}</p>
                  <div className={styles.MyMessageDiv1}>
                    <div className={styles.MyMessageMsg}>{el.message}</div>
                    <p className={styles.MyMessageTime}>{el.time}</p>
                  </div>
                </div>
              </div>
            ) : (
              // eslint-disable-next-line react/no-array-index-key
              <div key={idx} className={styles.Audience}>
                <p className={styles.MyMessageTime}>{el.time}</p>
                <div className={styles.AudienceMsg}>{el.message}</div>
              </div>
            )}
          </ul>
        ))}
    </div>
  );
}

export default MessageBox;
