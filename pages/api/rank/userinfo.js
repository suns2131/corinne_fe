export default function handler(req, res) {
    if(req.method === 'GET'){
        // GET 요청 처리
        res.status(200).json({
             imageUrl: '/images/cat.png',
             nickname: '테스트계정',
             exp: 29000,
             myRank: 3,
             BestRank: 2,
             follower: 10,
             following: 20,
             fluctuationRate: 24.21,
             totalBalance: 694873,
             resetCount: 2
        })
    }
  }
  