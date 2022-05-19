import { memo } from 'react';

import cn from 'classnames';

function ResetSuccessModal({ resetSuccessModalOpen, closeResetSuccessModal }) {
  return (
    <div
      style={{ background: 'rgba(0, 0, 0, 0.6)' }}
      className={cn(resetSuccessModalOpen ? 'absolute top-0 left-0 w-full h-full' : 'hidden')}
    >
      <div
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        className="top-0 absolute mx-auto w-[440px] h-[200px] bg-white shadow-box rounded-[10px] z-10"
      >
        <div className="h-[69px] border-b">
          <div className="p-5">
            <h1 className="font-bold">보유자산 리셋 완료</h1>
          </div>
        </div>
        <div className="p-5 text-Neutrals-black">
          <p>정상적으로 보유자산이 리셋되었습니다.</p>
        </div>
        <div className="px-5">
          <button
            onClick={closeResetSuccessModal}
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

export default memo(ResetSuccessModal);
