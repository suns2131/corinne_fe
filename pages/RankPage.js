import RankSideView from "../components/rankpage/contaniner/RankSideView";
import RankView from "../components/rankpage/contaniner/RankView";
import Headers from "../components/shared/Headers/container/Headers";

export default function RankPage() {
    return (
        <div className=" w-container m-auto ">
            <div className=" h-headers bg-white">
                <Headers />
            </div>
            <div className=" bg-white flex">
                <div className="  w-rankview  bg-white mr-5">
                    <RankView />
                </div>
                <div className=" w-ranksideview bg-white">
                    <RankSideView />
                </div>
            </div>
            <div className=" h-footers bg-green-500">
                footer
            </div>
        </div>
    );
}