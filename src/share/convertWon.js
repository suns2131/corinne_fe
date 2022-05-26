export function Won(money) {
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

export function KoreanWon(money) {
  let Numbers = typeof money === 'number' ? money : false;
  if (Numbers === 0) return 0;
  const defalutNumber = Numbers;
  if (Numbers < 0) {
    // eslint-disable-next-line no-unused-expressions
    Numbers *= -1;
  }
  const unitWord = ['', '만', '억', '조'];
  const splitUnit = 10000;
  const dataArray = [];
  let result = '';

  for (let i = 0; i < splitUnit; i += 1) {
    let unitResult = (Numbers % splitUnit ** (i + 1)) / splitUnit ** i;
    unitResult = Math.floor(unitResult);
    if (unitResult > 0) {
      dataArray[i] = unitResult;
    }
  }

  for (let i = 0; i < dataArray.length; i += 1) {
    // eslint-disable-next-line no-continue
    if (!dataArray[i]) continue;
    result = `${dataArray[i]}${unitWord[i]}${result}`;
  }
  if (defalutNumber > 1000000000000) {
    // 경
    // const index = result.indexOf('억');
    // result = result.slice(0, index + 1);
  }
  if (defalutNumber > 1000000000000) {
    // 조
    const index = result.indexOf('만');
    result = result.slice(0, index + 1);
  }

  return defalutNumber < 0 ? `-${result}` : result;
}

export function convertRate(money) {
  let Numbers = typeof money === 'number' ? money : false;
  if (Numbers === 0) return 0;
  const defalutNumber = Numbers;
  if (Numbers < 0) {
    // eslint-disable-next-line no-unused-expressions
    Numbers *= -1;
  }
  const unitWord = ['', '만', '억', '조'];
  const splitUnit = 10000;
  const dataArray = [];
  let result = '';

  for (let i = 0; i < splitUnit; i += 1) {
    let unitResult = (Numbers % splitUnit ** (i + 1)) / splitUnit ** i;
    unitResult = Math.floor(unitResult);
    if (unitResult > 0) {
      dataArray[i] = unitResult;
    }
  }

  for (let i = 0; i < dataArray.length; i += 1) {
    // eslint-disable-next-line no-continue
    if (!dataArray[i]) continue;
    result = `${dataArray[i]}${unitWord[i]}${result}`;
  }
  if (defalutNumber > 1000000000000) {
    // 경
    // const index = result.indexOf('억');
    // result = result.slice(0, index + 1);
  }
  if (defalutNumber > 1000000000000) {
    // 조
    const index = result.indexOf('만');
    result = result.slice(0, index + 1);
  }

  return defalutNumber < 0 ? `-${result}` : result;
}
