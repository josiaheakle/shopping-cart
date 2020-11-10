// components
import Navbar from "./Navbar/Navbar.js"
import CartProduct from "./CartProduct.js"
import Button from "./Button.js"

// media
import bgVideo from "../media/Forest.mp4"

// styles
import "./css/ShoppingCart.css"

// react
import { useState, useEffect } from "react"
import React from 'react'
import { Link } from "react-router-dom"

const EmptyCartContainer = ( props ) => {

    return(
        <div className='empty-cart-container'>
            <h1 className='empty-cart-text'> Your cart is empty. </h1>
            <Link to="/shop"><Button title='Browse Homes'/></Link>
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

        let itemRemoved = false;
        let newCart = cartArray.filter(item => {
            let canRemove = true;
            if(itemRemoved === true) {
                canRemove = false;
            }
            if(item.id === id) 
                itemRemoved = true;
            return (item.id !== id || canRemove === false)
        });
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

    const formatPrice = (price) => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        })
        return formatter.format(price)
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
        refreshTotal();
        props.updateCartProp(cartArray)
    }, [cartArray])

    return(

        <div className='ShoppingCart'>
            <Navbar title='Cart' atHome={false} cartAmt={cartArray.length}  />

            <div className={`cart-container ${(cartTotal == 0)?'empty':'full'}`} >
            {(cartTotal !== 0) ? (
                <div className='checkout-container'>
                    <span className='cart-total-container'>
                        <span> Cart subtotal:</span> 
                        <span id='cart-total'>{formatPrice(cartTotal)}</span>
                    </span>
                    <button > Proceed to Checkout </button>
                </div>) : null}

                {(cartArray.length<1)?<EmptyCartContainer/>:null}

                {cartListDom}

            </div>

            <video src={bgVideo} autoPlay muted loop id="background-video"/>
        </div>

    );
}



export default ShoppingCart;