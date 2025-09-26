import { Link } from "react-router-dom"
import "./Hero.css"


const Hero = () => {
    return (
        <div>
            <section className="heading" id="home">
                <div className="contentsss">
                    {/* parent container */}
                    <div className="parent-content">
                        {/* middle container */}
                        <div className="main-content">
                        <div className="available"><Link><span>•</span>  Available for hire</Link></div>
                        <h1 className="h1">Hey, I'm Balogun Israel, <br/> a Creative 
                        <span className="blue"> Frontend</span><br/>
                        <span className="orange"> Developer.</span>
                        </h1>
                        <div className="p">A product designer and Frontend Developer</div>
                    </div>

                    </div>

        <div className="CTO">
            <Link className="CTO-1" id="reachout" to="/contact">Reach Out</Link>
            <Link className="CTO-1" id="myworks" to="/myworks">Download CV</Link>
        </div>
      </div>
    </section>
        </div>
    )
}

export default Hero