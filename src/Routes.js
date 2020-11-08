
import Home from "./components/Home"
import Shop from "./components/Shop"
import ShoppingCart from "./components/ShoppingCart"

import { BrowserRouter, Switch, Route } from "react-router-dom"
import { useState } from "react"

const Routes = () => {

    const [ cart, setCart ] = useState([])
    const updateCart = (newCart) => {
        setCart(newCart)
    }



    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={(props) => (<Home {...props} cart={cart}/>)} />
                <Route exact path='/shop' render={(props) => (<Shop {...props} updateCart={updateCart} cart={cart} />)} />
                <Route exact path='/cart' render={(props) => (<ShoppingCart {...props} cart={cart} />)}/>
                {/* // component={ShoppingCart}/> */}
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;