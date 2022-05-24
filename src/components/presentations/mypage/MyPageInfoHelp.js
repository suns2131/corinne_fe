import styled from '@emotion/styled';
import { memo } from 'react';

function MyPageInfoHelp() {
  return (
    <div className="relative left-[350px] -top-[78px] flex justify-center items-start ">
      <Arrow />
      <div className="w-[375px] h-[295px] p-5 pr-0 gap-[16px] rounded-[12px] shadow-help bg-Neutrals-black">
        <div className="flex-grow-0 flex flex-col justify-start items-start gap-[8px]">
          <span className="flex-grow-0 font-Pretendard text-[12px] font-bold text-left text-Neutrals-white">
            보유자산 리셋
          </span>
          <span className="flex-grow-0 font-Pretendard text-[12px] text-left text-Neutrals-lightGray leading-5">
            보유자산은 매주 월요일 오전9시에
            <br />
            1,000,000원으로 자동 리셋됩니다.
            <br />
            <br />
            수익률을 초기화하고 싶을 때 언제든지
            <br />
            자유롭게 리셋할 수 있습니다. 리셋을 할 경우
            <br />
            초기 자본금만 남게 됩니다.
            <br />
            <br />
            단, 보상으로 받은 금액 또한 사라지게 되며
            <br />
            한 번 리셋된 자산은 복구가 불가능합니다.
            <br />
            <br />
            <span className="text-[#ff450def]">
              **원화는 실제 원화가 아닌, corinne 가상 원화입니다
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default memo(MyPageInfoHelp);

const Arrow = styled.div`
  border-top: 10px solid #33323f;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 0px solid transparent;
  content: '';
  margin-top: 40px;
  margin-left: 10px;
  transform: rotate(-270deg);
  width: 8px;
  height: 20px;
`;
