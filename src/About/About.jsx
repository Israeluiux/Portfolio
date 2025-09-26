import "./About.css"
import Israel from "../assets/Israel.jpg"
import Card from "../Components/Card/Card"

 const About = () => {
    return (
        <div>
            <div className="about-section">
                <div className="about-top">
                    <h2>About</h2>
                    <p>I'm Balogun Israel, a product designer and frontend developer with over 1.5 years and a year experience in both fields respectively with a passion for
                    crafting interactive and engaging digital experiences. </p>
                    <p>When I'm not doing all of that, I'm either watching tiktok, listening to music, playing
                    games or scrolling Pinterest.
                    </p>
                </div>

            </div>
                <Card />
        </div>
    )
}

export default About