import { Link } from "react-router-dom"

import Navbar from "./Navbar/Navbar.js"
import Product from "./Product.js"

import "./css/Shop.css";


import bkImg from "../media/background-img.jpg"
import cabin_01_img from "../media/products/cabin_01.jpg"
import cabin_02_img from "../media/products/cabin_02.jpg"
import { useState, useEffect } from "react";


const Shop = () => {

    const [ itemList, setItemList ] = useState([]);
    const [ listDom, setListDom] = useState( <span/> );

    const createItem = (title, imgSrc, descr, price) => {

        const item = {
            title: title,
            imgSrc: imgSrc,
            descr: descr,
            price: price, // in cents
        }

        return item;

    }



    const createList = () => {
        console.log('creating list')
        setItemList([
            createItem('Mellow Homestead', cabin_01_img, 'Located in UT, this beautiful cabin could be yours.', '10000'),
            createItem('Snowy Warmth', cabin_02_img, 'a fine cabin again', '5000')
        ])
    }

    const addItemToCart = (id) => {



    }

    const renderList = () => {

        console.log(itemList)

        let index=0;
        setListDom(
            <div className='list'>
                {itemList.map(item => {
                    return(<div> <Product key={index++} title={item.title} imgSrc={item.imgSrc} descr={item.descr} price={item.price} clickAction={addItemToCart} /> </div>);
                })}
            </div>
        );
        
        console.log(listDom)

    }

    useEffect(() => {
        console.log('useEffectcalled')

        createList()
    }, []);

    useEffect(() => {
        renderList();
    }, [itemList]);

    return(

        <div className='Shop'>
            <Navbar atHome={false} title='Shop' />
                <div className='shop-container'>
                    {listDom}

                </div>


            <img src={bkImg} id='background-img' />
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