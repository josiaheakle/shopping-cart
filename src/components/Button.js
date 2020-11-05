

import "./css/Button.css"

const Button = ( props ) => {

    // props -
    //  onClick - calls parent function
    //  title   - text to show on button

    return(
        <button className='Button' onClick={props.onClick}>{ props.title}</button>
    );
}

export default Button