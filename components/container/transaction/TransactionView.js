import Headers from "../../shared/Headers/container/Headers";
import TransContentView from "./TransContentView";
import TransSideView from "./TransSideView";

function TransactionView() {
    return (
        <div className=" w-container m-auto ">
            <div className=" h-headers bg-white">
                <Headers />
            </div>
            <div className=" bg-white flex">
                <div className="  w-[387px] mr-5">
                    <TransContentView />
                </div>
                <div className=" w-rankview ">
                    <TransSideView />
                </div>
            </div>
            <div className=" h-footers bg-green-500">
                footer
            </div>
        </div>
    );
}

export default TransactionView;