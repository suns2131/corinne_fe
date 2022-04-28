import styled from "styled-components";

const ChattingView = (props) => {
    return (
        <ChatDiv>
            <div className="title_area">
              <div>실시간 채팅</div>
            </div> 
            <div className="content_area">

            </div>
            <ChatInput placeholder="Send Message" type="text" />
        </ChatDiv>
    );
}
const ChatDiv = styled.div`
    width: 390px;
    height: 416px;
    border: 1px solid #E6E6E6;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 20px;
    margin: 20px;

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
      width: 364px;
      height: 265px;
      margin: 25px 0px;
      overflow-y: scroll;
    }
`

const ChatInput = styled.input`
    border-radius: 28px;
    background-color: #F7F7F7;
    width: 336px;
    height: 50px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    padding-left: 22px;
    padding-top: 16px;
    padding-bottom: 15px;

    border:none;
    border-right:0px; 
    border-top:0px; 
    boder-left:0px; 
    boder-bottom:0px;
`

export default ChattingView