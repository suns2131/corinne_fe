export default function handler(req, res) {
  if (req.method === 'GET') {
    // GET 요청 처리
    res.status(200).json([
      {
        id: 1,
        imageUrl: '',
        exp: 2000,
        nickname: '테스트계정',
        fluctuationRate: +24.21,
        totalBalance: 694873,
      },
      {
        id: 2,
        imageUrl: '',
        exp: 2000,
        nickname: '테스트계정1',
        fluctuationRate: -10.0,
        totalBalance: 7000000,
      },
      {
        id: 3,
        imageUrl: '',
        exp: 8000,
        nickname: '테스트계정2',
        fluctuationRate: +100.0,
        totalBalance: 1004873,
      },
      {
        id: 4,
        imageUrl: '',
        exp: 22000,
        nickname: '테스트계정3',
        fluctuationRate: +15.11,
        totalBalance: 694873,
      },
      {
        id: 5,
        imageUrl: '',
        exp: 2000,
        nickname: '테스트계정4',
        fluctuationRate: -34.88,
        totalBalance: 40000,
      },
      {
        id: 6,
        imageUrl: '',
        exp: 32000,
        nickname: '테스트계정5',
        fluctuationRate: -100.84,
        totalBalance: 2000000,
      },
    ]);
  }
}
