import "./Form v2.css"

const Formv2 = () => {
    return (
        <div className="form-container">
              <div className="work-title">Contact</div>
        
            <div className="input-container">
                <div className="name">
                    <input type="text" placeholder="Your fullname" />
                </div>
                <div className="name">
                    <input type="text" placeholder="Your Email Address" />   
                </div>
            </div>
                <textarea className="textarea" id="" placeholder="Write your message"></textarea>
        <button type="button" className="contactbtn">Submit</button>

        </div>
    )
}

export default Formv2