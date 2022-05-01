import styled from "styled-components";

const ChartView = (props) => {
    
    return (
        <ChartDiv>
            <div className="title_area">
              <div className="left_area">
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="72" height="72" rx="20" fill="#ECECEC"/>
                  <path d="M46.9843 38.2889C45.8859 35.9139 43.1695 34.9758 43.1695 34.9758C43.1695 34.9758 46.5925 33.2183 45.8414 29.7686C45.3575 27.5183 43.3179 25.2561 39.5209 25.1997V21.9341H36.1395V25.1997H33.6784V21.9341H30.3V25.1997H26.0576V28.2813H28.017C28.1223 28.2813 28.2265 28.302 28.3237 28.3423C28.421 28.3826 28.5094 28.4416 28.5838 28.516C28.6582 28.5905 28.7173 28.6788 28.7575 28.7761C28.7978 28.8733 28.8186 28.9776 28.8186 29.0828V42.3828C28.8186 42.619 28.7247 42.8456 28.5577 43.0126C28.3907 43.1796 28.1641 43.2735 27.9279 43.2735H26.7612L26.0576 46.5895H30.3V50.0778H33.6784V46.5895H36.1395V50.0778H39.5179V46.5895H40.1711C46.7112 46.5895 48.4687 41.5575 46.9843 38.2889ZM37.1192 28.2813C38.8381 28.2813 40.4323 29.3886 40.4768 31.0867C40.5214 32.7849 39.1142 34.2514 37.2468 34.2752C35.5279 34.296 33.6843 34.2752 33.6843 34.2752V28.2813C33.6843 28.2813 35.3171 28.2813 37.1192 28.2813ZM38.1286 43.2645C36.3473 43.2972 33.6754 43.2645 33.6754 43.2645V37.0302C33.6754 37.0302 36.1425 37.0658 37.9831 37.0302C40.1978 36.9945 41.8276 38.0277 41.8425 39.9781C41.8573 41.9286 40.5303 43.226 38.1286 43.2705V43.2645Z" fill="black"/>
                </svg>

                <div className="coinname_area">
                  <div className="name_area">
                    <CoinNameStyle>{props.name}</CoinNameStyle>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 9.24L14.81 8.62L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.55 13.97L22 9.24ZM12 15.4L8.24 17.67L9.24 13.39L5.92 10.51L10.3 10.13L12 6.1L13.71 10.14L18.09 10.52L14.77 13.4L15.77 17.68L12 15.4Z" fill="#323232"/>
                    </svg>
                  </div>
                    <CoinUpRateStyle>{props.fullName}</CoinUpRateStyle>
                </div>
              </div>
              <div className="money_area">
                <MoneyStyle>{props.money}</MoneyStyle>
                <MoneyUnitStlye>{props.unitMoney}</MoneyUnitStlye>
              </div>
            </div> 
        </ChartDiv>
    );
}

const ChartDiv = styled.div`
    width: 793px;
    height: 420px;
    border: 1px solid #E6E6E6;
    border-radius: 10px;
    box-sizing: border-box;
    overflow: hidden;
    padding: 20px;
    background: #FFFFFF;
    margin-top: 20px;

    .title_area{
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      display: flex;
      justify-content : space-between;
      align-items: center;
    }
    .left_area{
      display: flex;
      align-items: center;
    }
    .coinname_area{
      margin-left: 11px;
    }
    .name_area{
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

const CoinNameStyle = styled.div`
font-family: 'Pretendard';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
`

const CoinUpRateStyle = styled.div`
font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #C4C4C4;
`

const MoneyStyle = styled.div`
font-family: 'Pretendard';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
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
font-size: 16px;
line-height: 19px;
color: #C4C4C4;
`

export default ChartView