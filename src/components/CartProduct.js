import "./css/CartProduct.css"

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
        props.clickAction(props.id);
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
                    <button onClick={handleClick}>Remove</button>
                </span>
            </div>
        </div>
    );
}


export default CartProduct;