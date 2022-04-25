import react from "react"
import styled from 'styled-components'

const CoinListView = (props) => {
    const [isopen,setOpen] = react.useState(false);

    return (
        <>
        <ListDiv>   
            <button>더보기</button> 
            전체 종목 보기 
        </ListDiv>
        </>
    );
}

const ListDiv = styled.div`
    width: 500px;
`

export default CoinListView