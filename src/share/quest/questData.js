export function QuestData(type) {
  const resultQuest = {
    questTitle: '',
    questDesc: '',
    CompensationExp: 0,
    CompensationPoint: 0,
  };

  if (type === 1) {
    resultQuest.questTitle = '관심종목 추가하기';
    resultQuest.questDesc = '모의투자 페이지에서 관심종목을 추가해보세요.';
    resultQuest.CompensationExp = '10,000xp';
    resultQuest.CompensationPoint = '100,000원';
  }
  if (type === 2) {
    resultQuest.questTitle = '매수하기';
    resultQuest.questDesc = '1개이상의 종목을 매수해보세요';
    resultQuest.CompensationExp = '10,000xp';
    resultQuest.CompensationPoint = '100,000원';
  }
  if (type === 3) {
    resultQuest.questTitle = '매도하기';
    resultQuest.questDesc = '1개이상의 종목을 매도해보세요';
    resultQuest.CompensationExp = '5000xp';
    resultQuest.CompensationPoint = '100,000원';
  }
  if (type === 4) {
    resultQuest.questTitle = '레버리지를 설정하여 매수하기';
    resultQuest.questDesc = '레버리지 x25 이상 설정하여 매수해보세요';
    resultQuest.CompensationExp = '5000xp';
    resultQuest.CompensationPoint = '100,000원';
  }
  if (type === 5) {
    resultQuest.questTitle = '레버리지를 설정하여 매도하기';
    resultQuest.questDesc = '레버리지를 설정하여 매수한 종목을 매도해보세요';
    resultQuest.CompensationExp = '5000xp';
    resultQuest.CompensationPoint = '100,000원';
  }
  if (type === 6) {
    resultQuest.questTitle = '실시간 채팅 참여하기';
    resultQuest.questDesc = '모의투자 페이지에서 전체 채팅을 참여해보세요';
    resultQuest.CompensationExp = '5,000xp';
    resultQuest.CompensationPoint = 0;
  }
  if (type === 7) {
    resultQuest.questTitle = '팔로우하기';
    resultQuest.questDesc = '다른 회원을 팔로우해보세요';
    resultQuest.CompensationExp = '10,000xp';
    resultQuest.CompensationPoint = 0;
  }
  if (type === 8) {
    resultQuest.questTitle = '주간 모의투자 랭킹 참여하기';
    resultQuest.questDesc = '매수 또는 매도 시에 랭킹에 자동으로 참여됩니다.';
    resultQuest.CompensationExp = '10,000xp';
    resultQuest.CompensationPoint = '10,000원';
  }
  if (type === 9) {
    resultQuest.questTitle = '자산 리셋하기';
    resultQuest.questDesc = '마이페이지에서 자산을 리셋해보세요';
    resultQuest.CompensationExp = '10,000xp';
    resultQuest.CompensationPoint = '10,000원';
  }
  return resultQuest;
}
