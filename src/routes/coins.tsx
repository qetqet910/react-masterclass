import styled from "styled-components"
import { Link } from "react-router-dom"
import { useQuery } from "react-query"
import { CoinFetcher } from "../api"
import { Helmet } from "react-helmet"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { isDarkAtom } from "../atoms"

const Title = styled.h1`
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    display: inline;
    color: ${props => props.theme.textColor};
    font-weight: bold;
    font-size: calc(1vw + 1.5em);
`

const ModeToggle = styled.button`
    all:unset;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    right: 20%;
    top: 50%;
    transform: translateY(-50%);
    padding:6px;
    background: ${props => props.theme.backgroundColor};
    border-radius: 50%;
    border: 1px solid ${props => props.theme.textColor};
    transition: all .2s ease-in-out;
    i{
        color: ${props => props.theme.textColor};
        transition: all .2s ease-in-out;
    }
    cursor: pointer;
    &:hover{
        color: ${props => props.theme.backgroundColor};
        background: ${props => props.theme.textColor};
        i{
            color: ${props => props.theme.backgroundColor};

        }
    }
`

const Container = styled.div`

`
const Header = styled.header`
    position: relative;
    width: 100%;
    height: calc(1vw + 2.6em);
    background: ${props => props.theme.backgroundColor};
    box-shadow: 0px -10px 30px ${props => props.theme.textColor};
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
    background: ${props => props.theme.backgroundColor};
    box-shadow: 0px 0px 6px ${props => props.theme.textColor};
    a{
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: calc(1vw + .75em);
        color: ${props => props.theme.textColor};
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
    const isDark = useRecoilValue(isDarkAtom)
    const setIsDark = useSetRecoilState(isDarkAtom)
    const setDarkMode = () => setIsDark((cur) => !cur)

    return (
        <Container>
            <Helmet>
                <title>다운비트</title>
            </Helmet>
            <Header>
                <Title>다운비트</Title>
                <ModeToggle onClick={setDarkMode}>
                    {isDark ? <i className="far fa-sun"></i> : <i className="far fa-moon"></i>}

                </ModeToggle>
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
        </Container >
    )
}

export default Coins