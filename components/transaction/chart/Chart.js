import ChartView from "./ChartView";

const Chart = () => {
    const ChartData = {
        name : 'BTC',
        fullName :  'Bitcoin',
        money : '￦100,000,000',
        unitMoney : '1.00 BTC',
    }
    return (
        <ChartView {...ChartData}/>
    );
}

export default Chart