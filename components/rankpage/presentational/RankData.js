import intercept from '../../shared/intercept';

// GET
// 지난주 랭킹 결과
const prevRank = () => {
    intercept.get(''
    ).then((response)=> {
        console.log(response)
    }).catch((error)=> {
        console.log(error)
    })
}

// 이번주 실시간 랭킹
const realRank = () => {
    intercept.get(''
    ).then((response)=> {
        console.log(response)
    }).catch((error)=> {
        console.log(error)
    })
}

// 팔로워 랭킹
const followerRank = () => {
    intercept.get(''
    ).then((response)=> {
        console.log(response)
    }).catch((error)=> {
        console.log(error)
    })
}
// 내 정보 
const myInfo = () => {
    intercept.get(''
    ).then((response)=> {
        console.log(response)
    }).catch((error)=> {
        console.log(error)
    })
}
// 1:1 match 상대 정보 
const matchInfo = () => {
    intercept.get(''
    ).then((response)=> {
        console.log(response)
    }).catch((error)=> {
        console.log(error)
    })
}

// Set 
export function rankResult() {

} 

// rank props
const rankData = {
    prevRank,
    realRank,
    followerRank,
    myInfo,
    matchInfo,
}

export default rankData