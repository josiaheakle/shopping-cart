

import {useState, useEffect} from "react"

const CartProduct = (props) => {

    // props - 
    //      title       - name of item
    //      imgSrc      - img source
    //      descr       - description of item
    //      price       - price in $
    //      amount      - amount of items
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

    useEffect(() => {
        setPriceStr(formatPrice());
    }, [])

    return(
        <div className='CartProduct' id={props.id}> 
            <div className='cart-product-container'>
                <div className='product-image-container'>

                    <img className='image' src={props.imgSrc}/>
                </div>
                <span className='title'>{props.title}</span>
                <span className='price'>{`${priceStr}`}</span>

                <span className='descr'>{props.descr}</span>
                <span className='buy-container'>
                    <button onClick={handleClick}>Add to Cart</button>
                    <input onChange={updateQuantity} className='quantity' min='0' max='5' id={`quantity-${props.id}`} type='number' placeholder='0' />
                </span>
            </div>
        </div>
    );
}


export default CartProduct;