export default function handler(req, res) {
  if (req.method === 'GET') {
    // GET 요청 처리
    res.status(200).json([
      {
        id: 1,
        unit: 'BTC',
        tiker: 'KRW-BTC',
        fluctuationRate: +24.21,
        tikername: '비트코인',
        tradePrice: 14500000,
        favorite: false,
      },
      {
        id: 2,
        unit: 'SOL',
        tiker: 'KRW-SOL',
        fluctuationRate: -12.0,
        tikername: '솔라나',
        tradePrice: 700000,
        favorite: true,
      },
      {
        id: 3,
        unit: 'ETH',
        tiker: 'KRW-ETH',
        fluctuationRate: +1.2,
        tikername: 'ETH',
        tradePrice: 570000,
        favorite: false,
      },
    ]);
  }
}
