import styled from "styled-components"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

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
    alignitem-: center;
    background-color: white;
    color: black;
`
const Main = styled.main`
    max-width: 600px;
    margin 0 auto;
    width: 100%;
    padding: 20px 0px
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
        item-align: center;
        font-weight: bold;
        font-size: calc(1vw + .75em);
        &:hover{
            color: ${props => props.theme.accentrColor} 
        }
        img{
            margin-right: 16px;
        }
    }
`;

const IMG = styled.img`
    width: 25px;
    height: 25px;
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

interface CoinsAPI {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}



function Coins() {
    const [Coins, setCoins] = useState<CoinsAPI[]>([]);
    const [Loading, setLoading] = useState(false)

    useEffect(() => {
        (async () => {
            const res = await fetch("https://api.coinpaprika.com/v1/coins");
            const json = await res.json();
            setCoins(json.slice(0, 100))
            setLoading(true)
        })()
    }, [])
    return (
        <Container>
            <Header>
                <Title>Coins</Title>
            </Header>
            <Main>
                {Loading ? <CoinList>
                    {Coins.map(item => <Coin key={item.id}>
                        <Link to={{
                            pathname: `/${item.id}`,
                            state: { name: item.name }
                        }}>
                            <IMG src={`https://cryptoicon-api.vercel.app/api/icon/${item.symbol.toLowerCase()}`} />
                            {item.name} &rarr;</Link >
                    </Coin>)}
                </CoinList> : <Load>Loading...</Load>}
            </Main>

        </Container>
    )
}

export default Coins