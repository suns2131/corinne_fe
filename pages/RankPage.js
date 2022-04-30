import RankSideView from "../components/rankpage/contaniner/RankSideView";
import RankView from "../components/rankpage/contaniner/RankView";
import Headers from "../components/shared/Headers";

export default function RankPage() {
    return (
        <div className=" w-container m-auto ">
            <div className=" h-headers bg-slate-700">
                <Headers />
            </div>
            <div className=" bg-white flex">
                <div className="  w-rankview  bg-white mr-5">
                    <RankView />
                </div>
                <div className=" w-ranksideview bg-lime-700">
                    <RankSideView />
                </div>
            </div>
            <div className=" h-footers bg-green-500">
                footer
            </div>
        </div>
    );
}