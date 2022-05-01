import styled from "styled-components";

const BuyView = () => {
    return (
        <BuyDiv>
            <DivLine>
                <DivFont>보유</DivFont>    
                <DivAccount>0 KRW</DivAccount>
            </DivLine>
            <DivLine>
                <DivFont>매수가능</DivFont>  
                <DivAccount>0 KRW</DivAccount>  
            </DivLine>
            <DivLine>
                <DivFont>매수가능</DivFont>    
                <DivAccount>0 BTC</DivAccount>  
            </DivLine>
            <DivLine2>
                <DivFont>가격</DivFont>
                <DivInput>
                    <PriceInput type='text' placeholder="0" />
                    <UnitDiv>KRW</UnitDiv>
                    <Plusbtn>
                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="29" height="29" rx="4" fill="#C8C8C8"/>
                            <rect x="7" y="14" width="15" height="1" fill="white"/>
                            <rect x="15" y="7" width="15" height="1" transform="rotate(90 15 7)" fill="white"/>
                        </svg>
                    </Plusbtn>
                    <Minusbtn>
                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="29" height="29" rx="4" fill="#C8C8C8"/>
                            <rect x="7" y="14" width="15" height="1" fill="white"/>
                        </svg>
                    </Minusbtn>
                </DivInput>
            </DivLine2>
            <DivLine2>
                <BtnGroup>
                    <BtnDiv>10%</BtnDiv>
                    <BtnDiv>20%</BtnDiv>
                    <BtnDiv>25%</BtnDiv>
                    <BtnDiv>30%</BtnDiv>
                    <BtnDiv>40%</BtnDiv>
                    <BtnDiv>50%</BtnDiv>
                    <BtnDiv>75%</BtnDiv>
                    <BtnDiv>최대</BtnDiv>
                </BtnGroup>
            </DivLine2>
            <hr />   
        </BuyDiv>
    );
}

const BuyDiv = styled.div`
    width: 100%;
    padding: 20px;
`

const DivLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`
const DivLine2 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const DivFont = styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: left;
    color: #313241;
`

const DivAccount = styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: right;
    color: #313241;
`

const DivInput = styled.div`
    width: 268px;
    height: 41px;
    background: #FFFFFF;
    border: 1px solid #E2E2E2;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 6px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`

const PriceInput = styled.input`
    border:none;
    border-right:0px; 
    border-top:0px; 
    boder-left:0px; 
    boder-bottom:0px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700px;
    font-size: 16px;
    line-height: 19px;
    height: 19px;
    display: flex;
    align-items: center;
    color: #313241;
    width: 150px;
    text-align: right;
    margin-right: 2px;
`
const UnitDiv = styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700px;
    font-size: 16px;
    line-height: 19px;
`
const Plusbtn = styled.div`
   width: 29px;
   margin-left: 6px;
`
const Minusbtn = styled.div`
   width: 29px;
   margin-left: 6px;  
`
const BtnGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 268px;
    flex-wrap: wrap;
    background-color: red;
    padding-left: 0px;
    padding-right: 3px;
    padding-top: 6px;
    padding-bottom: 6pbx;
`
const BtnDiv = styled.div`
    width: 60px;
    height: 32px;
    background: #C8C8C8;
    border-radius: 10px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */
    display: flex;
    justify-content: center;
    align-items: center;
`

export default BuyView
