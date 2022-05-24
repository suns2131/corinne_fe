import FollowContainer from '../../containers/rank/FollowContainer';
import MatchContainer from '../../containers/rank/MatchContainer';
import PrevRankContainer from '../../containers/rank/PrevRankContainer';
import RealRankContainer from '../../containers/rank/RealRankContainer';
import UserInfnoContainer from '../../containers/rank/UserInfoContainer';
import Wrapper from '../Wrapper';
import UserProfile from './modal/UserProfile';
import PrevModal from './rankmodal/PrevModal';

function Rank({ modal, setModal, PrevRanks, callUser, setCallUser }) {
  return (
    <div>
      <Wrapper>
        <div className="flex mb-[90px]">
          <div className="mr-5">
            <PrevRankContainer setModal={setModal} setCallUser={setCallUser} />
            <RealRankContainer setCallUser={setCallUser} />
          </div>
          <div>
            <UserInfnoContainer setCallUser={setCallUser} />
            <MatchContainer setCallUser={setCallUser} />
            <FollowContainer setCallUser={setCallUser} />
          </div>
        </div>
      </Wrapper>
      {modal && (
        <div className="w-full h-screen fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-40 text-center z-40">
          <PrevModal setModal={setModal} PrevRanks={PrevRanks} />
        </div>
      )}
      {callUser.isopen && (
        <div className="w-full h-screen fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-40 text-center z-40">
          <UserProfile profile={callUser} setClose={setCallUser} />
        </div>
      )}
    </div>
  );
}

export default Rank;
