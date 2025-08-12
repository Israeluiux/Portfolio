import React, { useState } from "react"
import { Link } from "react-router-dom"
import image from "../assets/react.svg"
import "./Header.css"

const Header = () => {
    const [activenav, setActivenav] = useState(false)
    
    const openNav = () => {
        setActivenav(!activenav)
    }

    return(
        <div>
            <div className="section">
            {/* logo section */}
            <div className="logo" style={{display: 'flex'}}><img src={image} alt="" /><p>Israel</p></div>
            {/* nav links */}
            <ol className={activenav === false? "nav-links": "nav-links display-nav"}>
                <div className={activenav === false ? "desktopnav":"navbar"}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/myworks">My works</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </div>
            </ol>
            {/* CTA's */}
            <div className={activenav === false ? <div/> : "nav-cto"}>
             <div className={activenav === false ? "cto" : "cto display-cto"}>
                <Link className="signup" to="/reach_out">Reach out</Link>
            </div>
            </div>
        {/* Mobile version */}
        <div className="burger" onClick={openNav}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
       </div>
      
        </div>
        </div>
    )
}

export default Header