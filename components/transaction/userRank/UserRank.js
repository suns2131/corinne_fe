import UserRankView from "./UserRankView";

const UserRank = () => {
    const Userinfo = {
        name : '윤선식',
        rank : '999위',
    };
    return (
        <UserRankView {...Userinfo}/>
    );
}

export default UserRank