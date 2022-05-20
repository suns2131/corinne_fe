import React from 'react';

function Login({ kakaoRedirectUrl, isLogin, goToTransaction, modal, setModal }) {
  console.log(modal);
  return (
    <div>
      {isLogin ? (
        <div>
          <button
            type="button"
            onClick={goToTransaction}
            className="bg-white text-Primary-purple text-sm w-[183px] h-[45px] mt-[189px] cursor-pointer rounded-[10px]"
          >
            모의투자 바로가기
          </button>
          {modal && (
            <div className="w-full h-screen fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-40 text-center z-40">
              <div className="w-[600px] h-[600px] bg-[url('/images/eventpopup600.png')] bg-cover bg-center p-5 flex flex-col justify-start items-center">
                <div className="w-[560px] mb-[495px] flex justify-end items-center ">
                  <button
                    className="text-Neutrals-white font-Pretendard"
                    type="button"
                    onClick={() => setModal(false)}
                  >
                    X
                  </button>
                </div>
                <div className="flex">
                  <button
                    className="w-[273px] h-[48px] bg-Neutrals-black rounded-[10px] mr-[15px] flex items-center justify-center"
                    type="button"
                    onClick={goToTransaction}
                  >
                    <span className="w-[248px] h-[21px] font-Pretendard text-[14px] text-Neutrals-white flex flex-col justify-center items-center">
                      모의투자 바로가기
                    </span>
                  </button>
                  <button
                    className="w-[273px] h-[48px] bg-Primary-purple rounded-[10px] flex items-center justify-center"
                    type="button"
                  >
                    <span className="w-[248px] h-[21px] font-Pretendard text-[14px] text-Neutrals-white flex flex-col justify-center items-center">
                      설문조사 바로가기
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="w-[183px] h-[45px] mt-[189px]">
          <a className="cursor-pointer" href={kakaoRedirectUrl}>
            <img alt="카카오로그인" src="/images/kakao_login_medium_narrow.png" />
          </a>
        </div>
      )}
    </div>
  );
}

export default Login;
