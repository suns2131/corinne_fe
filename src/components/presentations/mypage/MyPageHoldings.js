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
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" y="1" width="19" height="19" rx="3.5" fill="white" />
              <path
                d="M11.445 7.04C11.01 6.91 10.53 6.825 10 6.825C7.60504 6.825 5.66504 8.765 5.66504 11.16C5.66504 13.56 7.60504 15.5 10 15.5C12.395 15.5 14.335 13.56 14.335 11.165C14.335 10.275 14.065 9.445 13.605 8.755"
                stroke="#CECECE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.445 7.04C11.01 6.91 10.53 6.825 10 6.825C7.60504 6.825 5.66504 8.765 5.66504 11.16C5.66504 13.56 7.60504 15.5 10 15.5C12.395 15.5 14.335 13.56 14.335 11.165C14.335 10.275 14.065 9.445 13.605 8.755"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.065 7.16001L10.62 5.50001"
                stroke="#CECECE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.065 7.16001L10.62 5.50001"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.065 7.16L10.38 8.39"
                stroke="#CECECE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.065 7.16L10.38 8.39"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect x="0.5" y="1" width="19" height="19" rx="3.5" stroke="#EEEEEE" />
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
