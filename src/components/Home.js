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
            <Navbar atHome={true} title={ `Wooded Homes` } searchCallAction={doNothing} cartAmt={props.cart.length} />

            <div className='center'>
                <Link to="/shop"><Button title='Browse Homes'/></Link>
            </div>

            <video src={bgVideo} autoPlay muted loop id="background-video"/>

        </div>

    );
}

export default Home;