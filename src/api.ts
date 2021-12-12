const COMMON_URL = "https://api.coinpaprika.com/v1/"

export function CoinFetcher() {
    return fetch(`${COMMON_URL}coins`).then((response) =>
        response.json()
    );
}

export function CoinInfo(CoinID: string) {
    return fetch(`${COMMON_URL}coins/${CoinID}`).then((res) => {
        return res.json()
    })
}

export function CoinPrice(CoinID: string) {
    return fetch(`${COMMON_URL}tickers/${CoinID}`).then((res) => {
        return res.json()
    })
}

export function CoinChart(CoinID: string) {

    const end = Math.floor(Date.now() / 1000)
    const start = end - 69 * 60 * 24 * 6 * 2

    return fetch(`${COMMON_URL}coins/${CoinID}/ohlcv/historical?start=${start}&end=${end}`).then((res) => {
        return res.json()
    })
}