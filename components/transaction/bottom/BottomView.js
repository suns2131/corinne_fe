import styled from "styled-components";
import OrderDetail from "./orderDetail/OrderDetail";
import TabPage from "./tabPage/TabPage";

function BottomView() {
    return (
        <BottomDiv>
            <TabPage />
            <OrderDetail  />
        </BottomDiv>
    );
}

const BottomDiv = styled.div`
    display: flex;
    margin-top: 20px;
`

export default BottomView