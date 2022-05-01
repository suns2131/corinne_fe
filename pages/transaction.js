import styled from "styled-components";
import Headers from "../components/shared/Headers/container/Headers";
// eslint-disable-next-line import/no-unresolved
import BottomView from "../components/transaction/bottom/bottomView";
import Chart from "../components/transaction/chart/Chart";
import Chatting from "../components/transaction/chatting/Chartting";
import CoinList from "../components/transaction/coinList/CoinList";
import UserRank from "../components/transaction/userRank/UserRank";

export default function Transaction() {
    return (
        <ContainerDiv>
              <Headers />
              <ContentDiv >
                  <CarouselDiv />
                  <MainDiv>
                    <DataDiv>
                      <Chart />
                      <BottomView />
                    </DataDiv>
                    <SidelDiv>
                      <UserRank />
                      <CoinList />
                      <Chatting />
                    </SidelDiv>
                  </MainDiv>
              </ContentDiv>
              <FooterDiv />
          </ContainerDiv>
    );
}

const ContainerDiv = styled.div`
    margin: auto;
    width: 1200px;
`

const ContentDiv = styled.article`
    width: 100%;
`

const CarouselDiv = styled.article`
  background-color: aqua;
  height: 144px;
`

const MainDiv = styled.article`
  width: 100%;
  display: flex;
`

const DataDiv = styled.article`
  width: 74%;
`

const SidelDiv = styled.article`
  background-color: white;
  min-width: 415px;
  width: 26%;
`

const FooterDiv = styled.div`
    width: 100%;
    height: 250px;
`