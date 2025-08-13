import "./Experience.css"
import experience_data from "../Experience"


const Experience = () => {
    return (
        <div className="exp-container">
                <div className="work-title">Experience</div>
                {
                    experience_data.map((each, index) => (
                    <div className="work-exp" key={index}>
                            <div className="pj-detail">
                                <div className="pj-name">{each["project-name"]}</div>
                                <div className="pj-position">{each["project-position"]}</div>
                            </div>
                            {/* right side of the div */}
                            <div>
                                <div className="pj-duration">{each["project-duration"]}</div>
                            </div>
                    </div>
                    ))
                }
        </div>
    )
}

export default Experience