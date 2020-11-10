
import "./css/Product.css"

import { useState, useEffect } from 'react'

const Product = ( props ) => {

    // props - 
    //      title       - name of item
    //      imgSrc      - img source
    //      descr       - description of item
    //      price       - price in $
    //      id          - unique item id
    //      clickAction - parent function call 
    //                    param: item id (same as item index)

    const [priceStr, setPriceStr] = useState('');
    const [itemAmt, setItemAmt] = useState(0);

    const handleClick = () => {
        console.log(`handling click for id ${props.id}`)
        props.clickAction(props.id, itemAmt);
    }

    const formatPrice = () => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        })
        return formatter.format(props.price)
    }

    const updateQuantity = () => {
        const input = document.querySelector(`#quantity-${props.id}`)
        setItemAmt(input.value)
    }

    useEffect(() => {
        setPriceStr(formatPrice());
        updateQuantity();
    }, [])

    return(
        <div className='Product'id={props.id}> 
            <div className='product-container'>
                <div className='product-image-container'>

                    <img className='image' src={props.imgSrc}/>
                </div>
                <span className='title'>{props.title}</span>
                <span className='price'>{`${priceStr}`}</span>

                <span className='descr'>{props.descr}</span>
                <span className='buy-container'>
                    <button onClick={handleClick}>Add to Cart</button>
                    <input onChange={updateQuantity} className='quantity' min='1' max='5' defaultValue={1} id={`quantity-${props.id}`} type='number' />
                </span>
            </div>
        </div>
    );

}

export default Product;