
import Home from "./components/Home"
import Shop from "./components/Shop"
import ShoppingCart from "./components/ShoppingCart"

import { BrowserRouter, Switch, Route } from "react-router-dom"

const Routes = () => {

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/shop' component={Shop}/>
                <Route exact path='/cart' component={ShoppingCart}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;