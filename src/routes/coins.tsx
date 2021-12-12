import styled from "styled-components"
import { Link } from "react-router-dom"
import { useQuery } from "react-query"
import { CoinFetcher } from "../api"
import { Helmet } from "react-helmet"

const Title = styled.h1`
    display: inline;
    color: ${props => props.theme.accentrColor};
    font-weight: bold;
    font-size: calc(1vw + 1.5em);
`

const Container = styled.div`

`
const Header = styled.header`
    width: 100%;
    height: calc(1vw + 2.6em);
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.textColor};
    box-shadow: 0px -10px 30px ${props => props.theme.textColor};
    color: black;
`
const Main = styled.main`
    max-width: 600px;
    margin 0 auto;
    width: 100%;
    padding: 20px 0px;
`
const CoinList = styled.ul`
    width: 100%;
`
const Coin = styled.li`
    display; blcok;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 20px;
    background: white;
    a{
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: calc(1vw + .75em);
        transition: all .25s;
        &:hover{
            color: ${props => props.theme.accentrColor} 
        }
        img{
            margin-right: 16px;
        }
    }
`;

const IMG = styled.img`
    width: 34px;
    height: 34px;
`

const Load = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    font-size: calc(1vw + 4em);
    text-align: center;
`

interface ICoin {
    id: string;
    is_active: boolean;
    is_new: boolean;
    name: string;
    rank: number;
    symbol: string;
    type: string;
}


function Coins() {
    const { isLoading, data } = useQuery<ICoin[]>("FCoins", CoinFetcher)
    console.log(data)

    return (
        <Container>
            <Helmet>
                <title>다운비트</title>
            </Helmet>
            <Header>
                <Title>다운비트</Title>
            </Header>
            <Main>
                {isLoading ? <Load>Loading...</Load> : <CoinList>
                    {data?.slice(0, 100).map(item => <Coin key={item.id}>
                        <Link to={{
                            pathname: `/${item.id}`,
                            state: { name: item.name }
                        }}>
                            <IMG src={`https://cryptoicon-api.vercel.app/api/icon/${item.symbol.toLowerCase()}`} />
                            {item.name} &rarr;</Link >
                    </Coin>)}
                </CoinList>}
            </Main>
        </Container>
    )
}

export default Coins