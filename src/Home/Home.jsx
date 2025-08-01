import { Link } from "react-router-dom"
import "./Home.css"
// import image from "../assets/react.svg"
import sample from "../assets/sample.jpg"
import sample2 from "../assets/sample2.mp4"
import Tech from "./Tech/Tech.jsx"

const Home = () => {
    return (
        <div>
            <section className="heading" id="home">
                <div className="contentsss">
                    {/* parent container */}
                    <div className="parent-content">
                        {/* left side container */}
                        {/* <div className="left-side">
                            <img src={sample} alt="" />
                        </div> */}
                        {/* middle container */}
                        <div className="main-content">
                        <h1 className="h1">BALOGUN ISRAEL, <br/> A CREATIVE <br/>
                        <span className="blue">FRONTEND</span><br/>
                        <span className="orange"> DEVELOPER.</span>
                        </h1>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius enim natus dolore culpa fugiat. Rem nobis aliquam nihil minus facere totam rerum ab sed a nesciunt, non, at quam nemo!</p> */}
                    </div>
                    {/* right side container */}
                    {/* <div className="right-side">
                            <video src={sample2} alt="" />
                        </div> */}
                    </div>

        <div class="CTO">
            <Link className="CTO-1" id="reachout" to="/reach_out">Reach Out</Link>
            <Link className="CTO-1" id="myworks" to="/myworks">Download CV</Link>
        </div>
      </div>
    </section>

    <Tech />
        </div>
    )
}

export default Home