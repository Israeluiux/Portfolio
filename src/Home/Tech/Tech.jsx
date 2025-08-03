import "./Tech.css"
import Tech_data from "../../Components/Tech"


const Tech = () => {
    return (
        <div>
            <div className="tech-section">
                {/* <h2>Technologies</h2> */}
                <div className="next-section">
                    {
                        Tech_data.map((each) => (
                        <div className="tech">
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