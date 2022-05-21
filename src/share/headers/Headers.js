import React, { useEffect, useLayoutEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import AlarmNone from '../../../public/icons/header/alarm_none.svg';
import AlarmRing from '../../../public/icons/header/alarm_ring.svg';
import AlarmClick from '../../../public/icons/header/alarm_click.svg';
import socketClient from '../socket';
import { getCookie } from '../cookie';
import MyAlarm from '../myalarm/MyAlarm';
import { getUserInfo } from '../../state/reducer/user/thunk';
import Modal from '../modal/Modal';

const usertoken = getCookie({ name: 'corinne' });

export default function Headers({ handleRouter, headerMenu }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const islogin = usertoken !== undefined;
  const userInfo = useSelector((state) => state.user.userInfo);
  const [alarmState, setAlarmState] = useState(0);
  const [emergency, setEmergency] = useState({
    emState: false,
    title: '',
    desc: '',
  });

  const clickAlram = () => {
    if (alarmState === 2) setAlarmState(0);
    else setAlarmState(2);
  };

  useLayoutEffect(() => {
    if (usertoken !== undefined) {
      dispatch(getUserInfo());
    }
  }, [dispatch]);

  // const clickevent = () => {
  //   console.log(`test 전송`);
  //   axiosInstance.get('/api/test').then((response) => {
  //     console.log(response);
  //   });
  // };

  useEffect(() => {
    if (usertoken !== undefined) {
      console.log(`BEARER ${usertoken}`);
      // api/user/info에서 조회한 내정보의 userid로 알림 소켓 구독.
      socketClient.connect({ token: `BEARER ${usertoken}` }, () => {
        socketClient.subscribe(`/sub/topic/12`, (message) => {
          const AlramData = JSON.parse(message.body);
          console.log(AlramData);
          // 알림 로직 체크
          // 새로운 알림이 생길경우 1 / 알림이 없을 경우 0 / 알림 클릭시 2
          if (AlramData.type === 'BANKRUPTCY') {
            setAlarmState(1);
            setEmergency({
              emState: true,
              title: '파산 알림',
              desc: AlramData.message,
            });
          }
        });
      });
    }

    return () => {
      // if (socketClient.connected) {
      //   // 컴포넌트 종료 시 채팅 구독 취소 / 웹소켓 연결 종료
      //   socketClient.disconnect(
      //     () => {
      //       // socketClient.unsubscribe('sub-0');
      //     },
      //     { token: `BEARER ${usertoken}` },
      //   );
      // }
    };
  }, [userInfo]);

  if (islogin) {
    return (
      <div>
        <div className="w-container h-headers flex justify-between items-center shadow-box mb-5">
          <div className="h-[36px] text-[30px] font-bold text-left text-Primary-purple flex justify-start items-center">
            <Link href="/">corinne</Link>
          </div>
          <nav>
            <ul className="w-[450px] h-[36px] grow-0 flex justify-center items-center gap-[25px]">
              {headerMenu.map(({ key, pathname, menu }) => (
                <li
                  key={key}
                  className="w-[68px] h-[36px] grow-0 flex justify-center items-center gap-[10px] px-[8px]"
                >
                  <Link href={pathname}>
                    <span
                      className={cn(
                        pathname === router.pathname ? 'text-Primary-purple' : 'text-Neutrals-gray',
                        'w-[52px] h-[18px] grow-0 font-Pretendard text-[15px] font-bold text-center ',
                      )}
                    >
                      {menu}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="w-[68px] h-[36px] grow-0 flex justify-center items-center gap-[10px] px-[8px]">
                <Link href="/">
                  <span className="w-[52px] h-[18px] grow-0 font-Pretendard text-[15px] font-normal text-center text-Neutrals-gray">
                    로그아웃
                  </span>
                </Link>
              </li>
              <li className="w-[24px] h-[24px] grow-0 flex justify-center items-center">
                <button type="button" onClick={clickAlram}>
                  {alarmState === 0 && <AlarmNone />}
                  {alarmState === 1 && <AlarmRing />}
                  {alarmState === 2 && <AlarmClick />}
                </button>
              </li>
              <li
                role="presentation"
                onClick={handleRouter('/mypage')}
                // onClick={clickevent}
                className="w-[40px] h-[36px] grow-0 flex justify-center items-center"
              >
                <Image
                  src="/images/defaultProfile/defalutProfile32.png"
                  alt="defaultProfile"
                  width="32px"
                  height="32px"
                />
              </li>
            </ul>
          </nav>
        </div>
        {alarmState === 2 && (
          <div className=" relative">
            <div className=" absolute left-[773px] top-[-30px]">
              <MyAlarm />
            </div>
          </div>
        )}
        {emergency.emState && (
          <div className=" relative">
            <div className=" absolute left-[403px] top-[-30px]">
              <Modal title={emergency.title} setClose={setEmergency} btnView>
                <div className="w-[392px] font-Pretendard text-[16px] text-left text-Neutrals-black">
                  {emergency.desc}
                </div>
              </Modal>
            </div>
          </div>
        )}
      </div>
    );
  }
  return (
    <div className="font-Gmarket Sans w-container h-headers flex justify-start items-center gap-[712px]">
      <span className="w-[128px] h-[36px] text-[30px] font-bold text-left text-Neutrals-white flex justify-start items-center">
        corinne
      </span>
    </div>
  );
}
