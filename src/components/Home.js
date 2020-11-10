import Navbar from "./Navbar/Navbar.js"
import Button from "./Button.js"
import "./css/Home.css"
import bgVideo from "./../media/Forest.mp4"

import { Link } from "react-router-dom"


const Home = ( props ) => {

    // props - 
    //          cart

    const doNothing = () => {
        return null;
    }

    const enterStore = () => {

    }

    return(

        <div className='Home'>
            {/* <Navbar atHome={true} title={ `Woodland Cabins` } searchCallAction={doNothing} cartAmt={props.cart.length} /> */}

            <div className='center'>
                <h1 className='home-text'> Woodland Cabins. </h1>
                <Link className='button-link' to="/shop"><Button title='Browse'/></Link>
            </div>

            <video src={bgVideo} autoPlay muted loop id="background-video"/>
            <span id='created-by'><a id='portfolio-link' href='http://www.josiaheakle.com/'> Created by Josiah Eakle</a> </span>
        </div>

    );
}

export default Home;