import { Link } from "react-router-dom"
import "./Work.css"
import work_data from "../../Components/work"
import { AiOutlineGithub } from "react-icons/ai";

const Work = () => {
    return(
        <div className="work-section">
                <div className="work-title">Featured Projects.</div>
            <div className="work-body">
                {
                    work_data.map((work, index) => (

                <div className="work-card" key={index}>
                    <div className="imgs"><img src={work.img} alt="" /></div>
                    <div className="title">{work.title}</div>
                    <div className="body">{work.body}</div>
                    {/* types */}
                    <div className="type-container">
                        {
                            work.type.map((each, index) => (
                                <div className="type" key={index}>{each}</div>
                            ))
                        }
                    </div>
                    <div className="ctoo">
                        <Link to={work.link} className="a">View Project</Link>
                        {/* <Link to="" className="git"><AiOutlineGithub size={40}/></Link> */}
                        </div>
                </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Work