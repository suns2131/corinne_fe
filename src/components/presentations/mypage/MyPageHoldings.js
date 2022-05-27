import { memo } from 'react';
import MyPageInfoHelp from './MyPageInfoHelp';

function MyPageHoldings({ openResetModal, userBalance, profitOrLossCheck, openInfo, isInfoOn }) {
  if (!userBalance) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { accountBalance, totalBalance } = userBalance;
  const upDownCheck = profitOrLossCheck({ account: totalBalance, profit: 1000000 });
  return (
    <div className="shadow-box rounded-lg flex flex-col justify-center ">
      <section className="shadow-box h-[70px] rounded-t-[10px] bg-Neutrals-white ">
        <h1 className="inline-block p-5 font-bold">보유자산</h1>
        <div
          onMouseEnter={openInfo}
          onMouseLeave={openInfo}
          className="inline-block w-[70px] h-[70px] float-right p-7 cursor-pointer z-10"
        >
          <img
            className="w-[12px] h-[12px] pointer-events-none"
            alt="안내사항"
            src="/images/helpInfo.png"
          />
        </div>
        {isInfoOn && <MyPageInfoHelp />}
      </section>
      <section className="p-5 bg-Neutrals-white shadow-box rounded-b-[10px]">
        <div className="flex justify-between  ">
          <p className="flex items-start mt-[7px]">
            <svg
              onClick={openResetModal}
              className="cursor-pointer flex flex-col justify-center items-center"
              width="24"
              height="24"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_1147_8139)">
                <rect x="8" y="8" width="20" height="20" rx="4" fill="white" />
                <path
                  d="M19.445 14.54C19.01 14.41 18.53 14.325 18 14.325C15.605 14.325 13.665 16.265 13.665 18.66C13.665 21.06 15.605 23 18 23C20.395 23 22.335 21.06 22.335 18.665C22.335 17.775 22.065 16.945 21.605 16.255"
                  stroke="#CECECE"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.445 14.54C19.01 14.41 18.53 14.325 18 14.325C15.605 14.325 13.665 16.265 13.665 18.66C13.665 21.06 15.605 23 18 23C20.395 23 22.335 21.06 22.335 18.665C22.335 17.775 22.065 16.945 21.605 16.255"
                  stroke="black"
                  strokeOpacity="0.2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.065 14.66L18.62 13"
                  stroke="#CECECE"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.065 14.66L18.62 13"
                  stroke="black"
                  strokeOpacity="0.2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.065 14.66L18.38 15.89"
                  stroke="#CECECE"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.065 14.66L18.38 15.89"
                  stroke="black"
                  strokeOpacity="0.2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect x="8.5" y="8.5" width="19" height="19" rx="3.5" stroke="#EEEEEE" />
              </g>
              <defs>
                <filter
                  id="filter0_d_1147_8139"
                  x="0"
                  y="0"
                  width="36"
                  height="36"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1147_8139"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1147_8139"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <span className="ml-1 text-[14px] text-Neutrals-black">총자산</span>
          </p>
          <div className="text-right">
            <p className="text-[24px] font-bold">{totalBalance.toLocaleString()}원</p>
            <p className={upDownCheck.property}>{upDownCheck.result}</p>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <p className="text-[14px] text-Neutrals-black">매수한 자산</p>
          <p className="font-bold text-[15px]">
            {(totalBalance - accountBalance).toLocaleString()}원
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-[14px] text-Neutrals-black">원화 자산</p>
          <p className="font-bold text-[15px]">{accountBalance.toLocaleString()}원</p>
        </div>
      </section>
    </div>
  );
}

export default memo(MyPageHoldings);
