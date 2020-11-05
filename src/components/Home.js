import Navbar from "./Navbar/Navbar.js"
import Button from "./Button.js"
import "./css/Home.css"
import bgVideo from "./../media/Forest.mp4"

import { Link } from "react-router-dom"


const Home = () => {

    const doNothing = () => {
        return null;
    }

    const enterStore = () => {

    }

    return(

        <div className='Home'>
            <Navbar title={ `Forest Rain` } searchCallAction={doNothing} />

            <div className='center'>
                <Link to="/shop"><Button onClick={enterStore} title='Browse'/></Link>
            </div>

            <video src={bgVideo} autoPlay muted loop id="background-video"/>

        </div>

    );
}

export default Home;