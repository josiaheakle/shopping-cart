import { Link } from "react-router-dom"

import Navbar from "./Navbar/Navbar.js"
import Product from "./Product.js"
import ShoppingCart from "./ShoppingCart.js"

import "./css/Shop.css";

import bgVid from "../media/Forest.mp4"
import cabin_01_img from "../media/products/cabin_01.jpg"
import cabin_02_img from "../media/products/cabin_02.jpg"
import cabin_03_img from "../media/products/cabin_03.jpg"
import cabin_04_img from "../media/products/cabin_04.jpg"
import cabin_05_img from "../media/products/cabin_05.jpg"
import cabin_06_img from "../media/products/cabin_06.jpg"



import { useState, useEffect } from "react";



const Shop = ( props ) => {

    // props -
    //      cart
    //      updateCartProp - parent function call
    //                   param : new cart

    const [ itemList, setItemList ] = useState([]);
    const [ listDom, setListDom] = useState( <span/> );
    const [ cartArray, setCart ] = useState(props.cart);


    let index=0;
    const createItem = (title, imgSrc, descr, price) => {

        const item = {
            title: title,
            imgSrc: imgSrc,
            descr: descr,
            price: price, // in cents
            id: index++,
        }

        return item;

    }



    const createList = () => {
        setItemList([
            createItem('Mellow Homestead', cabin_01_img, 'Located in Northern Utah, this two story is packed with all amenenties needed for a comfortable and lavish live.', 250000),
            createItem("Lovers' Hideaway" , cabin_02_img, 'This secluded studio cabin is ferfect for a couples getaway,', 90000),
            createItem('Home away from Home', cabin_04_img, 'This cabin could be your home.', 140000),
            createItem("Gone Huntin'", cabin_05_img, 'While on the smaller side, this warm cabin is perfect for a hunting or fishing trip.', 70000),
            createItem('Mountain Shack', cabin_06_img, 'This tiny, cozy, rustic cabin is a perfect place for a lone weekend getaway.', 50000),

        
        ])
    }

    const addItemToCart = (id, amt) => {
        for(let i=0; i<itemList.length; i++) {
            if(i === id) {
                const item = itemList[i];
                for(let i=0;i<amt;i++) {
                    setCart((prevCartArray) => [...prevCartArray, item]);
                }
            }
        }
    }


    const renderList = () => {
        setListDom(
            <div className='list'>
                {itemList.map(item => {
                    return(<Product id={item.id} key={item.id} title={item.title} imgSrc={item.imgSrc} descr={item.descr} price={item.price} clickAction={addItemToCart} />);
                })}
            </div>
        );
    }

    const loadCart = () => {
        if(props.cart !== []) {
            setCart(props.cart)
        }
    }

    useEffect(() => {
        loadCart();
        createList()
    }, []);

    useEffect(() => {
        renderList();
    }, [itemList]);

    useEffect(() => {

        console.log(`updated cart in shop`)
        console.log(cartArray)
        props.updateCartProp(cartArray)

    }, [cartArray])

    return(

        <div className='Shop'>
            <Navbar atHome={false} title='Shop' cartAmt={cartArray.length} />
            <div className='shop-container'>
                {listDom}
            </div>
            {/* {(cartOpen === true) ? <ShoppingCart cart={cartArray} /> : null} */}
                
            
            <video src={bgVid} autoPlay muted loop id="background-video"/>

            {/* <img src={bkImg} id='background-img' /> */}
        </div>

    );
}

// Photo by Brandon Montrone from Pexels

export default Shop;

// Photo by Eneida Nieves from Pexels
// Photo by Spencer Selover from Pexels
// Photo by Louis from Pexels
// Photo by Tobi from Pexels
// Photo by Adriaan Greyling from Pexels