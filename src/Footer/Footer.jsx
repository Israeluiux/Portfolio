import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <div className="footer-section">
                <div className="sub-footer">
                    <div className="footer">
                        {/* top content */}
                        <h2 className="h2">I'm open to new opportunities and projects. <br/>
                            Feel free to reach out</h2>
                        {/* bottom contents */}
                        <div className="socials">
                            <div>
                                <ul class="social-footer">
                                <li><Link>LinkedIn</Link></li>
                                <li><Link>Instagram</Link></li>
                                <li><Link>Github</Link></li>
                                <li><Link to="https://x.com">Twitter(Formaly X)</Link></li>
                                </ul>
                            </div>

                            <div className="contacts">
                                <ul>
                                    <li>israelbalogun15@gmail.com</li>
                                    <li>+234 812 3759 602</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer
