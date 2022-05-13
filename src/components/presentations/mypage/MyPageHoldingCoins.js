import { memo } from 'react'

function MyPageHoldingCoins({data, userBalance}) {
    if (!userBalance) return null;
    return (
        <div className="text-center shadow-md rounded-lg p-5">
            <section>
                <h1>보유코인</h1>
            </section>
            <section>
                {data.map(({coin, balance}) => (
                    <div className="flex justify-between">
                    <div>
                        {coin}
                    </div>
                    <div>
                        {balance}
                    </div>
                </div>
                ) )}
            </section>
        </div>
        )
}

export default memo(MyPageHoldingCoins);