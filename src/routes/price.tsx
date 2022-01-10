import { useQuery } from "react-query";
import styled, { keyframes } from "styled-components";
import { CoinPrice } from "../api";

const Anima = keyframes`
  0% {
    transform: translateY(10px) rotateY(90deg);
    opacity: 0;
  }
  100% {
    transform: none;
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  main:first-child {
    animation-delay: 0.15s;
  }
  main:nth-child(2) {
    animation-delay: 0.3s;
  }
  main:nth-child(3) {
    animation-delay: 0.45s;
  }
  main:nth-child(4) {
    animation-delay: 0.6s;
  }
  main:nth-child(5) {
    animation-delay: 0.75s;
  }
  main:last-child {
    animation-delay: 0.9s;
  }
`;

const Overview = styled.main`
  width: 100%;
  height: 50px;
  background-color: ${props => props.theme.backgroundColor};
  box-shadow: 0px 0px 4px ${props => props.theme.textColor};
  display: flex;
  padding: 10px 0px;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  margin: 10px 20px;
  transform: translateY(-5px);
  opacity: 0;
  animation: ${Anima} 0.5s linear forwards;
`;

const Tag = styled.h3`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.textColor};
  font-size: calc(.20vw + .7em);
  font-weight: 600;
`;

const Value = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h3<{ isPositive?: Boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => (props.isPositive ? "lightgreen" : "red")};
`;

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

interface PriceProps {
    coinId: string;
}

function checkValue(value: number | undefined) {
    if (value) {
        return value > 0;
    }
}

function Price({ coinId }: PriceProps) {
    const { isLoading: CoinPriceLoading, data: CoinPriceData } = useQuery<PriceData>(["CoinPrice", coinId], () => CoinPrice(coinId), {
        refetchInterval: 1000
    })

    return (
        <Container>
            {CoinPriceLoading ? (
                "Loading Price..."
            ) : (
                <>
                    <Overview>
                        <Tag>Price </Tag>
                        <Value>
                            <Text isPositive={true}>
                                {CoinPriceData?.quotes.USD.price.toFixed(3)}
                            </Text>
                        </Value>
                    </Overview>
                    <Overview>
                        <Tag> Max Change rate in last 24h</Tag>
                        <Value>
                            <Text
                                isPositive={
                                    checkValue(CoinPriceData?.quotes.USD.market_cap_change_24h) === true
                                }
                            >
                                {CoinPriceData?.quotes.USD.market_cap_change_24h} %
                            </Text>
                        </Value>
                    </Overview>

                    <Overview>
                        <Tag> Change rate (last 30 Minutes)</Tag>
                        <Value>
                            <Text
                                isPositive={
                                    checkValue(CoinPriceData?.quotes.USD.percent_change_30m) === true
                                }
                            >
                                {CoinPriceData?.quotes.USD.percent_change_30m} %
                            </Text>
                        </Value>
                    </Overview>

                    <Overview>
                        <Tag> Change rate (last 1 hours)</Tag>
                        <Value>
                            <Text
                                isPositive={
                                    checkValue(CoinPriceData?.quotes.USD.percent_change_1h) === true
                                }
                            >
                                {CoinPriceData?.quotes.USD.percent_change_1h} %
                            </Text>
                        </Value>
                    </Overview>

                    <Overview>
                        <Tag> Change rate (last 12 hours)</Tag>
                        <Value>
                            <Text
                                isPositive={
                                    checkValue(CoinPriceData?.quotes.USD.percent_change_12h) === true
                                }
                            >
                                {CoinPriceData?.quotes.USD.percent_change_12h} %
                            </Text>
                        </Value>
                    </Overview>

                    <Overview>
                        <Tag> Change rate (last 24 hours)</Tag>
                        <Value>
                            <Text
                                isPositive={
                                    checkValue(CoinPriceData?.quotes.USD.percent_change_24h) === true
                                }
                            >
                                {CoinPriceData?.quotes.USD.percent_change_24h} %
                            </Text>
                        </Value>
                    </Overview>
                </>
            )}
        </Container>
    );
}

export default Price;