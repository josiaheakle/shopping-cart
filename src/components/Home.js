import Navbar from "./Navbar/Navbar.js"
import "./css/Home.css"

const Home = () => {

    const doNothing = () => {
        return null;
    }

    return(

        <div className='Home'>
            <Navbar title={ `Cabins` } searchCallAction={doNothing} />

            <video autoPlay='autoplay' muted loop='loop' id="rain-video">
                <source src="./../media/Rain.mp4" type="video/mp4"/>
            </video>
        </div>

    );
}

export default Home;