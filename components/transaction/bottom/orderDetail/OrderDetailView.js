import styled from "styled-components";

const orderDetailView = (props) => {
    return (
        <OrderDiv>
            <div className="title_area">
              <div>주문 내역</div>
              <hr />
            </div> 
        </OrderDiv>
    );
}

const OrderDiv = styled.div`
    width: 383px;
    height: 560px;
    background: #FFFFFF;
    border: 1px solid #E6E6E6;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 20px;

    .title_area{
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
    }

    hr{
      background: #E2E2E2;
      width: 342px;
      height: 1px;
    }
`

export default orderDetailView;