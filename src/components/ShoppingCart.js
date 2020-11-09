// components
import Navbar from "./Navbar/Navbar.js"
import CartProduct from "./CartProduct.js"

// media
import bgVideo from "../media/Forest.mp4"

// styles
import "./css/ShoppingCart.css"

// react
import { useState, useEffect } from "react"
import React from 'react'

const EmptyCartContainer = ( props ) => {

    return(
        <div className='empty-cart-container'>
            <h1> Your cart is empty, check the shop! </h1>
        </div> 
    );
}

const ShoppingCart = ( props ) => {

    // props -
    //           cart : array of products user added to cart
    // updateCartProp : parent function to remove an item from cart
    //                  param: newCart

    // state -
    //      cartListDom : dom of the cart

    // const [ cartListDom, setCartListDom ] = useState(<span/>);
    const [ cartArray, setCart ] = useState([]);
    const [ cartListDom, setCartDom ] = useState(<span/>)
    const [ cartTotal, setCartTotal ] = useState(0.00);

    const handleItemClick = (id) => {
        console.log(`handling click`)
        removeFromCart(id);
    }

    const removeFromCart = (id) => {
        console.log(`removing from cart`)


        let newCart = cartArray.filter(item => item.id !== id);
        updateCart(newCart)


        // for(let i=0; i<cartArray.length; i++) {
        //     if(id === cartArray[i].id) {
        //         let newCart = cartArray.;
        //         console.log(`found item`)
        //         newCart.splice(i,1);
        //         console.log(newCart)
        //         updateCart(newCart);
        //         break;
        //     }
        // }
    }

    const updateCart = (newCart) => {
        console.log(newCart)
        setCart(newCart);
    }

    const refreshTotal = () => {
        let total = 0;
        for(let i=0; i<cartArray.length; i++) {
            total += cartArray[i].price;
        }
        setCartTotal(total);
    }


    // const renderCart = () => {
    //     console.log(`rendering cart!`)
    //     let index = 0;
    //     setCartListDom(

    //     );
    // }

    const renderCart = () => {
        setCartDom (
        <div className="cart-list"> 
            {cartArray.map((item,index) => {
                return(<CartProduct key={index} title={item.title} imgSrc={item.imgSrc} price={item.price} id={item.id} clickAction={handleItemClick} />)
            })}
        </div>
        );
    }

    useEffect(() => {
        console.log(`shopping cart has mounted`)
        setCart(props.cart)
        renderCart();
        refreshTotal();
    }, [])

    useEffect(() => {
        console.log(`cart has updated in shoping cart`)
        renderCart();
        props.updateCartProp(cartArray)
    }, [cartArray])

    return(

        <div className='ShoppingCart'>
            <Navbar title='Cart' atHome={false} cartAmt={cartArray.length}  />

            <div className='cart-container' >
                {cartListDom}
                <div className='checkout-container'>

                </div>

                {(cartArray.length<1)?<EmptyCartContainer/>:null}

            </div>

            <video src={bgVideo} autoPlay muted loop id="background-video"/>
        </div>

    );
}



export default ShoppingCart;