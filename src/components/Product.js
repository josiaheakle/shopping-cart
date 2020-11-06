
import "./css/Product.css"

const Product = ( props ) => {

    // props - 
    //      title
    //      imgSrc
    //      descr
    //      price
    //      id
    //      clickAction

    const handleClick = () => {
        props.clickAction(props.id);
    }

    return(
        <div className="Product"> 
            <span className='title'>{props.title}</span>
            <img className='image' src={props.imgSrc}/>
            <span className='descr'>{props.descr}</span>
            <span className='price'>{`$`}</span>
            <button onClick={handleClick()}>Add to Cart</button>
        </div>
    );

}

export default Product;