import styled from "styled-components"
import { useLocation, useParams } from "react-router"
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
    width: 100%;
    padding: 20px 0px
`
interface Params {
    coinId: string
}

interface toState {
    name: string
}

interface InfoData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_at: string;
}

interface PriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        USD: {
            ath_date: string;
            ath_price: number;
            market_cap: number;
            market_cap_change_24h: number;
            percent_change_1h: number;
            percent_change_1y: number;
            percent_change_6h: number;
            percent_change_7d: number;
            percent_change_12h: number;
            percent_change_15m: number;
            percent_change_24h: number;
            percent_change_30d: number;
            percent_change_30m: number;
            percent_from_price_ath: number;
            price: number;
            volume_24h: number;
            volume_24h_change_24h: number;
        };
    };
}

function Coin() {
    const { coinId } = useParams<Params>()
    const { state } = useLocation<toState>();
    const [price, setPrice] = useState<InfoData>()
    const [tickers, settickers] = useState<PriceData>()

    useEffect(() => {
        (async () => {
            const res = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json()
            setPrice(res)
            console.log(res)
        })();
        (async () => {
            const res = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json()
            settickers(res)
        })()
    }, [coinId])

    return (
        <Container>
            <Header>
                <Title>{state?.name || "Loading..."}</Title>
            </Header>
            <Main>

            </Main>
        </Container>
    )
}

export default Coin