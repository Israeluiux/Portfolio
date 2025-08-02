import "./Form.css"

const Form = () => {
    return (
        <div>
          <section className="contact" id="contact">
            <button className="h2">Contact</button>

      <div className="h22">
        Love to hear from you, <br />
        Get in touch...👋
      </div>

      <form action="form">
        <div className="form-action">
          <div className="displayerror">
            <input
            className="username"
            type="text"
            placeholder="Enter your fullname"
          />
          <p className="p1 ">⚠ Please fill this field</p>
          </div>
          
          <div className="displayerror">
            <input className="email" type="text" placeholder="Enter your email" />
            <p className="p2 ">⚠ Please enter a valid email</p>
          </div>

          <select className="category" id="userselection">
            <option value="">FinTech</option>
            <option value="">Personal</option>
            <option value="">Agriculture</option>
            <option value="">E-commerce</option>
            <option value="">Web App</option>
            <option value="">Dashboards</option>
            <option value="">Others</option>
          </select>

          <select className="budget" id="userselection">
            <option value="">Select your budget</option>
            <option value="">$400</option>
          </select>
        </div>


          <textarea className="textarea" name="" placeholder="Short description"></textarea>
          <p className="p3">⚠ Please fill this field to continue</p>

        

        <button type="button" className="contactbtn">Submit</button>
      </form>
    </section>
        </div>
    )
}

export default Form