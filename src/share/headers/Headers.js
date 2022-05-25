/* eslint-disable no-nested-ternary */
import React, { useEffect, useLayoutEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import AlarmNone from '../../../public/icons/header/alarm_none.svg';
import AlarmRing from '../../../public/icons/header/alarm_ring.svg';
import AlarmClick from '../../../public/icons/header/alarm_click.svg';
import AlarmWhite from '../../../public/icons/header/alarm_white.svg';
import AlarmWhiteNone from '../../../public/icons/header/alarm_white_none.svg';
import socketClient from '../socket';
import { getCookie, removeCookie } from '../cookie';
import MyAlarm from '../myalarm/MyAlarm';
import { getUserInfo } from '../../state/reducer/user/thunk';
import Modal from '../modal/Modal';
import { selectedUserInfo } from '../../state/reducer/user/selectors';

const usertoken = getCookie({ name: 'corinne' });

export default function Headers({ handleRouter, headerMenu }) {
  const dispatch = useDispatch();
  const router = useRouter();

  // console.log(`usertoken: ${usertoken}`);
  const islogin = usertoken !== undefined;
  const userInfo = useSelector(selectedUserInfo);
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
    // console.log(window.location.pathname);
  }, [dispatch]);

  useEffect(() => {
    if (usertoken !== undefined) {
      if (socketClient.connected === false && userInfo !== null) {
        socketClient.connect({ token: `BEARER ${usertoken}` }, () => {
          socketClient.subscribe(`/sub/topic/${userInfo.userId}`, (message) => {
            const AlramData = JSON.parse(message.body);
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
      const intervals = setInterval(() => {
        if (socketClient.connected === false && userInfo !== null) {
          // console.log(socketClient.connected);
          // console.log(userInfo);
        }
      }, 1000);
    }

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
  }, [dispatch, userInfo]);

  if (islogin) {
    if (window.location.pathname !== '/') {
      return (
        <div>
          <div className="w-container h-headers flex justify-between items-center">
            <div className="text-[30px] font-bold text-left text-Primary-purple flex justify-start items-center font-Gmarket-Sans">
              <Link href="/">corinne</Link>
            </div>
            <nav>
              <ul className="w-[450px] h-[36px] grow-0 flex justify-end items-center gap-[2em]">
                {headerMenu.map(({ key, pathname, menu }) => (
                  <li
                    key={key}
                    role="presentation"
                    onClick={handleRouter(pathname)}
                    className="grow-0 flex justify-center items-center px-[8px] cursor-pointer"
                  >
                    <span
                      className={cn(
                        pathname === router.pathname
                          ? 'text-Primary-purple font-bold'
                          : 'text-Neutrals-gray font-normal',
                        'h-[1.13em] grow-0 font-Pretendard text-[15px]  text-center ',
                      )}
                    >
                      {menu}
                    </span>
                  </li>
                ))}
                <li
                  role="presentation"
                  onClick={() => {
                    removeCookie({ name: 'corinne' });
                    window.location.replace('/');
                  }}
                  className="w-[4.25em] h-[1.13em] grow-0 flex justify-center items-center gap-[10px] px-[8px]"
                >
                  <span className="h-[1.13em] grow-0 font-Pretendard text-[15px] font-normal text-center text-Neutrals-gray cursor-pointer">
                    로그아웃
                  </span>
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
                  className="w-[40px] h-[36px] grow-0 flex justify-center items-center cursor-pointer"
                >
                  <img
                    className=" rounded-full"
                    src={
                      userInfo?.imageUrl !== undefined
                        ? userInfo.imageUrl !== 'null'
                          ? userInfo.imageUrl
                          : '/images/defaultProfile/defalutProfile32.png'
                        : '/images/defaultProfile/defalutProfile32.png'
                    }
                    alt="defaultProfile"
                    width="32px"
                    height="32px"
                  />
                </li>
              </ul>
            </nav>
          </div>
          {alarmState === 2 && (
            <div className=" absolute left-[56.9vw] top-[5vh]">
              <MyAlarm />
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
    if (window.location.pathname === '/') {
      return (
        <div>
          <div className="w-container h-headers flex justify-between items-center">
            <div className="text-[30px] font-bold text-left text-Neutrals-white flex justify-start items-center font-Gmarket-Sans">
              <Link href="/">corinne</Link>
            </div>
            <nav>
              <ul className="w-[450px] h-[36px] grow-0 flex justify-end items-center gap-[2em]">
                {headerMenu.map(({ key, pathname, menu }) => (
                  <li
                    key={key}
                    role="presentation"
                    onClick={handleRouter(pathname)}
                    className="grow-0 flex justify-center items-center px-[8px] cursor-pointer"
                  >
                    <span
                      className={cn(
                        pathname === router.pathname
                          ? 'text-Primary-purple font-bold'
                          : 'text-Neutrals-white font-normal',
                        'h-[1.13em] grow-0 font-Pretendard text-[15px]  text-center ',
                      )}
                    >
                      {menu}
                    </span>
                  </li>
                ))}
                <li
                  role="presentation"
                  onClick={() => {
                    console.log('쿠키삭제');
                    removeCookie({ name: 'corinne' });
                    window.location.replace('/');
                  }}
                  className="w-[4.25em] h-[1.13em] grow-0 flex justify-center items-center gap-[10px] px-[8px]"
                >
                  <span className="h-[1.13em] grow-0 font-Pretendard text-[15px] font-normal text-center text-Neutrals-white cursor-pointer">
                    로그아웃
                  </span>
                </li>
                <li className="w-[24px] h-[24px] grow-0 flex justify-center items-center">
                  <button type="button" onClick={clickAlram}>
                    {alarmState === 0 && <AlarmWhiteNone />}
                    {alarmState === 1 && <AlarmRing />}
                    {alarmState === 2 && <AlarmWhite />}
                  </button>
                </li>
                <li
                  role="presentation"
                  onClick={handleRouter('/mypage')}
                  className="w-[40px] h-[36px] grow-0 flex justify-center items-center cursor-pointer"
                >
                  <img
                    className=" rounded-full"
                    src={
                      userInfo?.imageUrl !== undefined
                        ? userInfo.imageUrl !== 'null'
                          ? userInfo.imageUrl
                          : '/images/defaultProfile/defalutProfile32.png'
                        : '/images/defaultProfile/defalutProfile32.png'
                    }
                    alt="defaultProfile"
                    width="32px"
                    height="32px"
                  />
                </li>
              </ul>
            </nav>
          </div>
          {alarmState === 2 && (
            <div className=" absolute left-[57.25vw] top-[5vh]">
              <MyAlarm />
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
  }

  return (
    <div className="font-Gmarket Sans w-container h-headers flex justify-start items-center gap-[712px]">
      <span className="w-[128px] h-[36px] text-[30px] font-bold text-left text-Neutrals-white flex justify-start items-center">
        corinne
      </span>
    </div>
  );
}
