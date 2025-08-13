import "./About.css"
import Israel from "../assets/Israel.jpg"
import Card from "../Components/Card/Card"

 const About = () => {
    return (
        <div>
            <div className="about-section">
                <div className="about-top">
                    <h2>About</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex commodi iste, vero quod assumenda reiciendis ducimus consequatur, eius hic aliquid iure illum cum alias magnam consequuntur facere. Illo tempora quia libero totam in incidunt molestias adipisci illum similique esse inventore sit suscipit, voluptate sint blanditiis alias pariatur doloremque magnam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex commodi iste, vero quod assumenda reiciendis ducimus consequatur, eius hic aliquid iure illum cum alias magnam consequuntur facere. Illo tempora quia libero totam in incidunt molestias adipisci illum similique esse inventore sit suscipit, voluptate sint blanditiis alias pariatur doloremque magnam.</p>
                </div>

                {/* <div className="about-bottom">
                    <div className="left-side">
                        <img src={Israel} alt="" />
                    </div>
                </div> */}

            </div>
                <Card />
        </div>
    )
}

export default About