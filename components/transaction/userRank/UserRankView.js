import styled from "styled-components";
import propTypes from "prop-types";

function UserRankView({ name , rank }) {
    return (
        <RankDiv>
            <UserDescDiv ><span>{name}님</span>의 랭킹은 <span>{rank}</span> 입니다.🎉</UserDescDiv>
        </RankDiv>
    );
}

UserRankView.propTypes = {
    name : propTypes.node.isRequired,
    rank : propTypes.node.isRequired,
}

const RankDiv = styled.div`
    margin: 20px 20px;
    width: 390px;
    height: 64px;
    background: #434051;
    border: 1px solid #E6E6E6;
    box-sizing: border-box;
    border-radius: 10px;
    display: flex;
    align-items: center;
`

const UserDescDiv = styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color : #eeee;
    margin-left: 21px;
    span{
        color: #929292;
    }
`

export default UserRankView