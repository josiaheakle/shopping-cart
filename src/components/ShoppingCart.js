// components
import Navbar from "./Navbar/Navbar.js"
import CartProduct from "./CartProduct.js"

// media
import bgVideo from "../media/Forest.mp4"

// styles
import "./css/ShoppingCart.css"

// react
import { useState, useEffect } from "react"

const ShoppingCart = ( props ) => {

    // props -
    //      cart : array of products user added to cart

    // state -
    //      cartListDom : dom of the cart

    const [ cartListDom, setCartListDom ] = useState(<span/>);

    const handleItemClick = () => {

    }

    const renderCart = () => {

        setCartListDom(
            <div className="cart-list"> 
                {props.cart.map((item, index) => {
                    <CartProduct key={index} title={item.title} imgSrc={item.src} price={item.price} id={item.id} clickAction={handleItemClick} inCart={true} />
                })}
            </div>
        );
        
    }

    useEffect(() => {
        renderCart();
    }, [])

    return(

        <div className='ShoppingCart'>
            <Navbar title='Cart' atHome={false} cartAmt={props.cart.length}  />

            {}

            <video src={bgVideo} autoPlay muted loop id="background-video"/>
        </div>

    );
}

export default ShoppingCart;