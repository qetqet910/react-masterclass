import { BrowserRouter, Switch, Route } from "react-router-dom"
import Coin from './coin'
import Coins from './coins'

function Router() {
    return (
        <BrowserRouter basename="/react-masterclass">
            <Switch>
                <Route path="/:coinId">
                    <Coin />
                </Route>
                <Route path="/">
                    <Coins />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router