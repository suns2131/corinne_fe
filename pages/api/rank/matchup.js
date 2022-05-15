export default function handler(req, res) {
  if (req.method === 'GET') {
    // GET 요청 처리
    res.status(200).json({
      winner: {
        imageUrl: '',
        nickname: '테스트계정',
        fluctuationRate: +24.21,
      },
      loser: {
        imageUrl: '',
        nickname: '테스트계정2',
        fluctuationRate: -10.11,
      },
    });
  }
}
