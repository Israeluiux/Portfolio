import "./Card.css"
import card_data from "../card"

const Card = () => {
    return (
        <div className="card-container">
            <div className="sub-card" style={{background: "red", color: "white"}}>
                <div className="text">A few of my Hobbies</div>
            </div>

            {
                card_data.map((each) => (
                    
            <div className="sub-card">
                {/* sub card content */}
                <div className="sub-head-card">
                    <div className="card-logo"><img src={each.logo} alt="" /></div>
                    <div className="right-head">
                        <div className="sub-title">{each["sub-title"]}</div>
                        <div className="title">{each.title}</div>
                    </div>
                </div>
                {/* card image */}
                <div className="card-img"><img src={each.image} alt="" /></div>
            </div>
                ))
            }


            
        </div>
    )
}

export default Card