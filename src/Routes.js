
import Home from "./components/Home"
import Shop from "./components/Shop"
import ShoppingCart from "./components/ShoppingCart"

import { BrowserRouter, Switch, Route, IndexRoute } from "react-router-dom"
import { useState,useEffect } from "react"

const Routes = () => {

    const [ cart, setCart ] = useState([])

    const updateCart = (newCart) => {
        console.log(`updating cart`)
        setCart(newCart)
    }

    const removeItemFromCart = (id) => {
        let newCart = cart;
        for(let i=0; i<newCart.length; i++) {
            console.log(newCart[i])
            if(id === newCart[i].id) {
                newCart.splice(i, 1);
                updateCart(newCart)
            }
        }
    }

    useEffect(()=>{
        console.log(`cart updated at routes in useEffect`)
        console.log(cart)
    })

    return(
        <BrowserRouter>

            <Switch>

                <Route exact path='/' >
                    <Home cart={cart}/>
                </Route>
                <Route exact path='/shop' >
                    <Shop cart={cart} updateCartProp={updateCart} />
                </Route>
                <Route exact path='/cart' >
                    <ShoppingCart cart={cart} updateCartProp={updateCart} />
                </Route>


                {/* <Route exact path='/' render={(props) => (<Home cart={cart}  {...props} />)} />
                <Route exact path='/shop' render={(props) => (<Shop updateCartProp={updateCart} cart={cart} {...props} />)} />
                <Route exact path='/cart' render={(props) => (<ShoppingCart cart={cart} removeFromCart={removeItemFromCart} {...props} />)}/> */}
                {/* // component={ShoppingCart}/> */}
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;