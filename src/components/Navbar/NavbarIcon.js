import React from "react"
import {Link} from "react-router-dom"

export default class NavbarIcon extends React.Component {

    // props-
    //      title
    //      materialIconName
    //      clickAction
    //      linkRoute - string for router link
    //      cartAmt

    constructor(props) {
        super(props)
    }

    

    render() {

        const { materialIconName, clickAction, title, linkRoute } = this.props;
        return( 
            
                <span title={title} className={`icon-container ${(materialIconName=== "home") ? 'home-icon' : ''}`} onClick={clickAction}>
                    <Link to={linkRoute} className="icon-button">
                        <i className='material-icons-outlined nav-icons'>{materialIconName}</i>
                        {(this.props.cartAmt)? <span className='cart-amount'> {this.props.cartAmt} </span> :null}
            
                    </Link>
                </span>
        );
    }
}


