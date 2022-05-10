import Headers from "../../shared/Headers/container/Headers";
import TransContentView from "./TransContentView";
import TransSideView from "./TransSideView";
import transprops from "../../presentational/transaction/TransactionLogic";

function TransactionView() {
    const propsData = transprops;
    return (
        <div className=" w-container m-auto ">
            <div className=" h-headers bg-white">
                <Headers />
            </div>
            <div className=" bg-white flex">
                <div className="  w-[387px] mr-5">
                  <TransContentView 
                    coinsList = {propsData.coinList}
                    searchCoin = {propsData.searchCoin}
                    />
                </div>
                <div className=" w-rankview ">
                    <TransSideView />
                </div>
            </div>
        </div>
    );
}

export default TransactionView;