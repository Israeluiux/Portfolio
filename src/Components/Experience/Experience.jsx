import "./Experience.css"
import experience_data from "../Experience"
import { education } from "../Experience"


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

                <div className="work-title">Education</div>
                {
                    education.map((each, index) => (
                    <div className="work-exp" key={index}>
                            <div className="pj-detail">
                                <div className="pj-name">{each.school}</div>
                                <div className="pj-position">{each.course}</div>
                            </div>
                            {/* right side of the div */}
                            <div>
                                <div className="pj-duration">{each.year}</div>
                            </div>
                    </div>
                    ))
                }
        </div>
    )
}

export default Experience