import { memo } from 'react';

import cn from 'classnames';

function MyPageResetModal({ resetModalOpen, closeResetModal, resetBalance }) {
  return (
    <div
      style={{ background: 'rgba(0, 0, 0, 0.6)' }}
      className={cn(resetModalOpen ? 'absolute top-0 left-0 w-full h-full' : 'hidden')}
    >
      <div
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        className="top-0 absolute mx-auto w-[440px] h-[381px] bg-white shadow-box rounded-[10px] z-10"
      >
        <div className="h-[69px] border-b">
          <div className="p-5">
            <h1 className="font-bold">보유자산 리셋</h1>
          </div>
        </div>
        <div className="p-5 text-Neutrals-black">
          <p>현재 수익률이 마음에 안 드시나요?</p>
          <br />
          <p>
            자산을 리셋하면 보상으로 받은 금액을 포함한 현재 자산과 거래내역이 모두 사라지고
            1,000,000원으로 다시 시작할 수 있습니다.
          </p>
          <p className="text-Primary-purple2">*한 번 리셋된 자산은 복구할 수 없습니다.</p>
        </div>
        <div className="px-5">
          <button
            onClick={resetBalance}
            type="button"
            className="bg-Neutrals-black w-full h-[45px] mx-auto text-white mb-3 rounded-[10px]"
          >
            리셋하기
          </button>
          <button
            onClick={closeResetModal}
            type="button"
            className="bg-[#6800BA] w-full h-[45px] mx-auto text-white rounded-[10px]"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(MyPageResetModal);
