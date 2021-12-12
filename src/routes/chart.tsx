import { CoinChart } from "../api";
import { useQuery } from "react-query";
import ApexChart from "react-apexcharts";

interface IChart {
    coinId: string;
}

interface IHistorical {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}

function Chart({ coinId }: IChart) {
    const { isLoading, data } = useQuery<IHistorical[]>(["CoinChart", coinId], () =>
        CoinChart(coinId)
    );
    console.log(data)
    return (
        <div>
            {isLoading ? (
                "Loading chart..."
            ) : (
                <ApexChart
                    type="candlestick"
                    series={[
                        {
                            name: "Price",
                            data: data?.map((price) => ({
                                x: price.time_close,
                                y: [
                                    price.open.toFixed(4),
                                    price.high.toFixed(4),
                                    price.low.toFixed(4),
                                    price.close.toFixed(4),
                                ],
                            })),
                        },
                    ]}
                    options={{
                        chart: {
                            type: "candlestick",
                            height: 600,
                            width: 500,
                            toolbar: {
                                show: true,
                            },
                            background: "transparent",
                        },
                        grid: { show: true },
                        stroke: {
                            curve: "smooth",
                            width: 3,
                        },
                        yaxis: {
                            show: true,
                            labels: {
                                show: true,
                                style: {
                                    colors: 'white',
                                    fontSize: '12px'
                                }
                            },
                        },
                        xaxis: {
                            axisBorder: { show: true },
                            axisTicks: { show: true },
                            labels: {
                                show: true,
                                style: {
                                    colors: 'white',
                                    fontSize: '12px'
                                }
                            },
                            type: "datetime",

                        },
                        plotOptions: {
                            candlestick: {
                                colors: {
                                    upward: '#3C90EB',
                                    downward: '#DF7D46'
                                }
                            }
                        },
                    }}
                />
            )}
        </div>
    );
}

export default Chart