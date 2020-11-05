import React from "react"

export default class NavbarIcon extends React.Component {

    constructor(props) {
        super(props)
    }

    

    render() {

        const { materialIconName, clickAction, title } = this.props;
        return( 
            <span title={title} className='icon-container' onClick={clickAction}>
                <a href='#' className='icon-button'><i className='material-icons-outlined nav-icons'>{materialIconName}</i></a>
            </span>

        );
    }
}


