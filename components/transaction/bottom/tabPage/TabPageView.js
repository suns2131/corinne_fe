import styled from "styled-components";
import {useState} from 'react'
import BuyView from "./buy/buyView";

const TabPageView = (props) => {
    const [tabState,setTabstate] = useState(true);
    return (
        <TabPageDiv>
            <div className="tab_header">
                <div onClick={() => setTabstate((prev) => !prev)}>
                    {tabState ? 
                      <div className="left_area1">매수</div> 
                      :
                      <div className="left_area2">매수</div> 
                    }
                </div>
                <div onClick={() => setTabstate((prev) => !prev)}>
                    {tabState ? 
                      <div className="right_area1">매도</div> 
                      :
                      <div className="right_area2">매도</div> 
                    }
                </div>
            </div>
            <div className="content_area">
                {
                  tabState ?
                  <BuyView></BuyView>
                  :
                  <></>
                }
            </div>
        </TabPageDiv>
    );
}

const TabPageDiv = styled.div`
    width: 390px;
    height: 560px;
    background: #FFFFFF;
    /* border: 1px solid #E6E6E6; */
    box-sizing: border-box;
    border-radius: 10px;
    margin-right: 20px;

    .tab_header{
        display: flex;
        align-items: center;
        /* border: 1px solid #E6E6E6; */
        justify-content: space-between;
        width: 390px;
    }
    .left_area1{
        width: 194px;
        height: 57px;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border: 1px solid #E6E6E6;
        border-radius: 10px 10px 0px 0px;
        border-bottom: none;
    }
    .left_area2{
        width: 194px;
        height: 57px;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border: 1px solid #E6E6E6;
        border-radius: 10px 10px 0px 0px;
        background-color: #DDDDDD;
    }

    .right_area1{
        width: 194px;
        height: 57px;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border: 1px solid #E6E6E6;
        border-radius: 10px 10px 0px 0px;
        background-color: #DDDDDD;
        
    }
    .right_area2{
        width: 194px;
        height: 57px;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border: 1px solid #E6E6E6;
        border-radius: 10px 10px 0px 0px;
        border-bottom: none;
    }
    .content_area{
        width: 390px;
        height: 502px;
        border: 1px solid #E6E6E6;
        box-sizing: border-box;
        border-radius: 0px 0px 10px 10px;
        border-top : none;
    }
`

export default TabPageView