

import "./css/Button.css"

const Button = ( props ) => {

    // props -
    //  title   - text to show on button

    return(
        <button className='Button'>{ props.title}</button>
    );
}

export default Button