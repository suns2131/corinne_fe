import { style } from "d3";
import react from "react"
import styled from 'styled-components'

const CoinListView = (props) => {
    const [isopen,setOpen] = react.useState(false);
    return (
        <>
        <ListDiv>
            <div className="title_area">
              <div>전체 종목 보기 </div>
            </div> 
            <div className="content_area">
              {Array.from({ length : 7}).map((el, idx) => {
                return (
                  <div className="item_area" key={idx}>
                  <div className="data_area"> 
                    <FavoriteBtn>
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4L6.24 15.67L7.24 11.39L3.92 8.51L8.3 8.13L10 4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z" fill="#323232"/>
                    </svg>
                    </FavoriteBtn>
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="44" height="44" rx="15" fill="#ECECEC"/>
                      <path d="M28.9376 23.4456C28.2438 21.9456 26.5282 21.3531 26.5282 21.3531C26.5282 21.3531 28.6901 20.2431 28.2157 18.0643C27.9101 16.6431 26.622 15.2143 24.2238 15.1787V13.1162H22.0882V15.1787H20.5338V13.1162H18.4001V15.1787H15.7207V17.125H16.9582C17.0247 17.125 17.0905 17.1381 17.1519 17.1635C17.2134 17.1889 17.2692 17.2262 17.3162 17.2732C17.3632 17.3202 17.4005 17.3761 17.4259 17.4375C17.4514 17.4989 17.4645 17.5647 17.4645 17.6312V26.0312C17.4645 26.1804 17.4052 26.3235 17.2997 26.429C17.1942 26.5344 17.0511 26.5937 16.902 26.5937H16.1651L15.7207 28.6881H18.4001V30.8912H20.5338V28.6881H22.0882V30.8912H24.222V28.6881H24.6345C28.7651 28.6881 29.8751 25.51 28.9376 23.4456ZM22.707 17.125C23.7926 17.125 24.7995 17.8243 24.8276 18.8968C24.8557 19.9693 23.967 20.8956 22.7876 20.9106C21.702 20.9237 20.5376 20.9106 20.5376 20.9106V17.125C20.5376 17.125 21.5688 17.125 22.707 17.125ZM23.3445 26.5881C22.2195 26.6087 20.532 26.5881 20.532 26.5881V22.6506C20.532 22.6506 22.0901 22.6731 23.2526 22.6506C24.6513 22.6281 25.6807 23.2806 25.6901 24.5125C25.6995 25.7443 24.8613 26.5637 23.3445 26.5918V26.5881Z" fill="black"/>
                    </svg>
                    <div className="coinname_area">
                        <CoinNameStyle>BTC</CoinNameStyle>
                        <CoinUpRateStyle>+1.6%</CoinUpRateStyle>
                    </div>
                  </div>
                  <div className="money_area">
                      <MoneyStyle>￦100,000,000</MoneyStyle>
                      <MoneyUnitStlye>2.73 BTC</MoneyUnitStlye>
                  </div>
                </div>  
                );
              })
              }
            </div>
        </ListDiv>
        </>
    );
}

const ListDiv = styled.div`
    width: 390px;
    height: 480px;
    border: 1px solid #E6E6E6;
    border-radius: 10px;
    box-sizing: border-box;
    overflow: hidden;
    margin: 20px;
    padding: 24px 25px 25px 25px;

    .title_area{
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      display: flex;
      align-items: center;
    }

    .content_area{
      width: 360px;
      height: 386px;
      margin: 25px 0px;
      overflow-y: scroll;
    }

    .item_area{
        display: flex;
        margin-bottom: 16px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        
    }
    .coinname_area{
      margin-left: 11px;
    }
    .data_area{
      display: flex;
      align-items: center;
    }
    .money_area{
      display: flex;
      margin-right: 5px;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
    }
`
 const FavoriteBtn = styled.button`
  background: transparent;
  color: #C4C4C4;
  border: none;
 `

 const CoinNameStyle = styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    color: #272727;
 `

 const CoinUpRateStyle = styled.div`
  margin-top: 5px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #C4C4C4;
 `

 const MoneyStyle = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #272727;
 `

 const MoneyUnitStlye = styled.div`
  margin-top: 5px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #C4C4C4;
 `

export default CoinListView