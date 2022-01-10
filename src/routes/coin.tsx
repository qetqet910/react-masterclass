import styled from "styled-components"
import { useLocation, useParams, useRouteMatch } from "react-router"
import { Switch, Route, Link } from 'react-router-dom';
import Chart from "./chart";
import Price from "./price";
import { CoinInfo, CoinPrice } from "../api";
import { useQuery } from "react-query";
import Helmet from "react-helmet"
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";



const Title = styled.h1`
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    display: inline;
    color: ${props => props.theme.textColor};
    font-weight: bold;
    font-size: calc(1vw + 1.5em);
`
const Container = styled.div`
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
    .apexcharts-tooltip {
        background: #fff;
        color: orange;
    }
    .apexcharts-toolbar{
        background: transparent;
        color: orange;
    }
`

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.backgroundColor};
  padding: 10px 20px;
  border-radius: 6px;
  box-shadow: 0px 0px 4px ${props => props.theme.textColor};
  margin: 20px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const OverviewItem2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 0px;
  span:first-child {
    font-size: 32px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  a{
    color: ${props => props.theme.textColor};
    font-size: calc(1vw + .8em);
    font-weight: bold;
    transition: all .25s;
    text-transform: uppercase;
    &:hover{
        color: ${props => props.theme.accentrColor}
    }
  }
`;

const Description = styled.p`
  display: block;
  margin: 20px;
  padding: 16px 20px;
  border-radius: 6px;
  background-color: ${props => props.theme.backgroundColor};
  box-shadow: 0px 0px 4px ${props => props.theme.textColor};
  `;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 20px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: calc(1vw + .5em);
  font-weight: 400;
  background-color: ${props => props.theme.backgroundColor};
  padding: 7px 0px;
  border-radius: 10px;
  font-weight: bold;
  box-shadow: 0px 0px 4px ${props => props.theme.textColor};
  a {
    display: block;
    color: ${props => props.isActive ? props.theme.accentrColor : props.theme.textColor}
}
`;

const RestedR = styled.div`
  margin: 20px
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
    const chartMatch = useRouteMatch("/:coinId/Chart")
    const priceMatch = useRouteMatch("/:coinId/Price")

    const { isLoading: CoinInfoLoading, data: CoinInfoData } = useQuery<InfoData>(["CoinInfo", coinId], () => CoinInfo(coinId))
    const { isLoading: CoinPriceLoading, data: CoinPriceData } = useQuery<PriceData>(["CoinPrice", coinId], () => CoinPrice(coinId), {
        refetchInterval: 1000
    })

    const Loading = CoinInfoLoading || CoinPriceLoading
    const setIsDark = useSetRecoilState(isDarkAtom)
    const setDarkMode = () => setIsDark((cur) => !cur)

    return (
        <Container>
            <Helmet>
                <title>{CoinInfoData?.name}</title>
            </Helmet>
            <Header>
                <Title>{state?.name ? state.name : Loading ? "Loading..." : CoinInfoData?.name}</Title>
                <ModeToggle onClick={setDarkMode}>
                    <i className="far fa-moon"></i>
                </ModeToggle>
            </Header>
            <Main>
                <Overview>
                    <OverviewItem2><span>{CoinInfoData?.name} Information</span></OverviewItem2>
                    <OverviewItem2>
                        <Link to={"/"}>Home</Link>
                    </OverviewItem2>
                </Overview>
                <Overview>
                    <OverviewItem>
                        <span>Rank</span>
                        <span>{CoinInfoData?.rank}</span>
                    </OverviewItem>
                    <OverviewItem>
                        <span>Symbol</span>
                        <span>${CoinInfoData?.symbol}</span>
                    </OverviewItem>
                    <OverviewItem>
                        <span>Price</span>
                        <span>{CoinPriceData?.quotes.USD.price}</span>
                    </OverviewItem>
                </Overview>
                <Description>{CoinInfoData?.description}</Description>
                <Overview>
                    <OverviewItem>
                        <span>Total Suply</span>
                        <span>{CoinPriceData?.total_supply}</span>
                    </OverviewItem>
                    <OverviewItem>
                        <span>Max Supply</span>
                        <span>{CoinPriceData?.max_supply}</span>
                    </OverviewItem>
                </Overview>
                <Tabs>
                    <Tab isActive={chartMatch !== null}>
                        <Link to={`/${coinId}/chart`}>Chart</Link>
                    </Tab>
                    <Tab isActive={priceMatch !== null}>
                        <Link to={`/${coinId}/price`}>Price</Link>
                    </Tab>
                </Tabs>
                <RestedR>
                    <Switch>
                        <Route path={"/:coinId/Chart"}>
                            <Chart coinId={coinId} />
                        </Route>
                        <Route path={"/:coinId/Price"}>
                            <Price coinId={coinId} />
                        </Route>
                    </Switch>
                </RestedR>
            </Main>
        </Container>
    )
}

export default Coin