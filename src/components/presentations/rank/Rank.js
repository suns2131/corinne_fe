import FollowContainer from '../../containers/rank/FollowContainer';
import MatchContainer from '../../containers/rank/MatchContainer';
import PrevRankContainer from '../../containers/rank/PrevRankContainer';
import RealRankContainer from '../../containers/rank/RealRankContainer';
import UserInfnoContainer from '../../containers/rank/UserInfoContainer';
import Wrapper from '../Wrapper';
import PrevModal from './rankmodal/PrevModal';

function Rank({ modal, setModal, PrevRanks, followClick }) {
  return (
    <div>
      <Wrapper>
        <div className="flex">
          <div className="mr-5">
            <PrevRankContainer setModal={setModal} />
            <RealRankContainer />
          </div>
          <div>
            <UserInfnoContainer />
            <MatchContainer />
            <FollowContainer />
          </div>
        </div>
      </Wrapper>
      {modal && (
        <div className="w-full h-screen fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-40 text-center z-40">
          <PrevModal setModal={setModal} PrevRanks={PrevRanks} />
        </div>
      )}
    </div>
  );
}

export default Rank;
