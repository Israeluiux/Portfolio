import { Link } from "react-router-dom"
import image from "../assets/react.svg"
import "./Header.css"

const Header = () => {
    return(
        <div>
            <div className="section">
            {/* logo section */}
            <div className="logo" style={{display: 'flex'}}><img src={image} alt="" /><p>Portfolio</p></div>
            {/* nav links */}
            <ol className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/myworks">My works</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ol>
            {/* CTA's */}
            <div className="cto">
                <Link className="signup" to="/reach_out">Reach out</Link>
            </div>
        </div>
        </div>
    )
}

export default Header