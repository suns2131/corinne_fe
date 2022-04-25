import styled from "styled-components";
import CoinList from "../components/transaction/coinList/CoinList";
import UserRank from "../components/transaction/userRank/UserRank";

export default function Transaction() {
    return (
        <>
            <ContainerDiv>
                <HeaderDiv />
                <ContentDiv >
                    <CarouselDiv />
                    <MainDiv>
                      <DataDiv>
                      </DataDiv>
                      <SidelDiv>
                        <UserRank />
                        <CoinList />
                      </SidelDiv>
                    </MainDiv>
                </ContentDiv>
                <FooterDiv />
            </ContainerDiv>
        </>
    );
}

const ContainerDiv = styled.div`
    margin: 0px 360px;
    background-color: antiquewhite;
`
const HeaderDiv = styled.div`
    width: 100%;
    height: 65px;
    background-color: aliceblue;
`

const ContentDiv = styled.article`
    width: 100%;
    height: 969px;
`

const CarouselDiv = styled.article`
  background-color: aqua;
  height: 144px;
`

const MainDiv = styled.article`
  background-color: cadetblue;
  width: 100%;
  display: flex;
`

const DataDiv = styled.article`
  width: 74%;
`

const SidelDiv = styled.article`
  background-color: white;
  width: 26%;
  margin: 0px 20px;
`

const FooterDiv = styled.div`
    width: 100%;
    height: 250px;
    background-color: aliceblue;
`