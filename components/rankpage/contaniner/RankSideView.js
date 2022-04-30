function RankSideView() {
    const rankData = Array.from({ length : 9 }, (v,i)=> i);
    return (
        <div className="font-Pretendard">
          <div className=" w-full bg-[#C4C4C4] p-6  mb-5 h-userinfo ">
              <div className=" mb-6 flex justify-start items-center">
                <div className=" w-14 h-14 rounded-full bg-[#EDEDED]  mr-4" />
                <div className=" w-4/5">
                  <div className=" w-full flex justify-between items-center">
                    <p className=" font-normal text-sm">닉네임|레벨</p>
                    <p className=" font-semibold text-base">랭킹 00위</p>
                  </div>
                  <p className=" font-normal text-xxs">경험치 00000</p>  
                  <div className=" bg-white rounded-xl w-full h-h5"/>
                </div>
                
              </div>
              <div className=" w-full flex justify-between items-center text-xs font-normal mb-1">
                <p>수익률</p>
                <p>00.00%</p>
              </div>
              <div className=" w-full flex justify-between items-center text-xs font-normal mb-6">
                <p>총 자산</p>
                <p>0,000,000</p>
              </div>
          </div>
          <div className=" w-full h-followerrank p-6 bg-[#C4C4C4] ">
              <p className=" font-bold text-base  mb-8 ">팔로워 랭킹</p>
              {/* 반복문 시작 */}
              {rankData && rankData.map((el) => (
                  <div key={el} className=" w-full flex mb-4 " >
                  <div className=" w-14 h-14 rounded-full bg-[#EDEDED]  mr-5" />
                  <div className=" w-4/5 ">
                    <div className="flex justify-between items-center ">
                      <div className=" flex">
                        <p className=" font-bold mr-1">00위</p>
                        <p className=" font-semibold">닉네임</p>
                      </div>
                      <div className=" w-9 h-4 bg-[#A5A5A5] rounded-md text-xxs flex justify-center items-center ">팔로잉</div>
                    </div>
                    <div className=" w-full flex justify-between items-center text-xs font-normal mb-1">
                      <p>수익률</p>
                      <p>00.00%</p>
                    </div>
                    <div className=" w-full flex justify-between items-center text-xs font-normal">
                      <p>총 자산</p>
                      <p>0,000,000</p>
                    </div>
                  </div>
                </div>
                ))}
              
          </div>
        </div>
    );
}

export default RankSideView;