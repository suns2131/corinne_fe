import { memo } from 'react'

function MyPageHoldingPortfolio({data, userBalance}) {
    if(!userBalance) return null;
    return (
        <div className="text-center shadow-md rounded-lg p-5">
            <section>
                보유자산 포트폴리오
            </section>
            <section className="text-center">
                <div className="w-[180px] h-[180px] mx-auto bg-slate-400">
                    그래프 자리
                </div>
                <ul className="grid grid-cols-2 w-48 mx-auto">
                    {data.map(({coin}) => (
                        <li>{coin}</li>
                    ))}
                </ul>
            </section>
        </div>
        )
}

export default memo(MyPageHoldingPortfolio);