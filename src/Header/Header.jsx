import React, { useState } from "react"
import { Link } from "react-router-dom"
import image from "../assets/react.svg"
import "./Header.css"

const Header = () => {
    const [activenav, setActivenav] = useState(false)
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? "dark" : "light"
        setTheme(newTheme)

        document.documentElement.setAttribute("data-theme", newTheme)
    }
    
    const openNav = () => {
        setActivenav(!activenav)
    }

    window.onscroll = () => {
        window.onscroll = setActivenav(false)
    };

    return(
        <div>
            <div className="section">
            {/* logo section */}
            <div className="logo" style={{display: 'flex',}}><p>Israel.dev</p></div>
            {/* nav links */}
            <ol className={activenav === false? "nav-links": "nav-links display-nav"}>
                <div className={activenav === false ? "desktopnav":"navbar"}>
                    <li><Link to="/" onClick={() => setActivenav(false)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setActivenav(false)}>About</Link></li>
                    <li><Link to="/myworks" onClick={() => setActivenav(false)}>My works</Link></li>
                    <li><Link to="/contact" onClick={() => setActivenav(false)}>Contact</Link></li>
                </div>
            </ol>
            {/* CTA's */}
            <div style={{display: 'flex', alignItems: 'center'}} className={activenav === false ? <div/> : "nav-cto"}>
            {/* <button onClick={toggleTheme}>Theme</button> */}
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