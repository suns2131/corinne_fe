export function Won(money) {
  // console.log(typeof(money));
  const ins = money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return ins;
}

export function Tname(tiker) {
  if (tiker === 'KRW-BTC') return '비트코인';
  if (tiker === 'KRW-SOL') return '솔라나';
  if (tiker === 'KRW-ETH') return '이더리움';
  if (tiker === 'KRW-XRP') return '리플';
  if (tiker === 'KRW-ADA') return '에이다';
  if (tiker === 'KRW-DOT') return '폴카닷';
  if (tiker === 'KRW-AVAX') return '아발란체';
  if (tiker === 'KRW-MATIC') return '폴리곤';
  if (tiker === 'KRW-DOGE') return '도지코인';
  return '';
}
