import "./Tech.css"
import Tech_data from "../../Components/Tech"
// import me from "../../assets/css.jpg"


const Tech = () => {
    return (
        <div>
            <div className="tech-section">
                {/* <h2>Technologies</h2> */}
                <div className="next-section">
                    {
                        Tech_data.map((each, index) => (
                        <div className="tech" key = {index}>
                            <img className="image" src={each.image} alt={each.name} />
                            <p>{each.name}</p>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Tech