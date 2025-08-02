import { Link } from "react-router-dom"
import "./Home.css"
// import image from "../assets/react.svg"
import Tech from "./Tech/Tech.jsx"
import Hero from "../Components/Hero/Hero.jsx"
import Contact from "../Contact/Contact.jsx"

const Home = () => {
    return (
        <div>
    <Hero />
    <Tech />
    <Contact />
        </div>
    )
}

export default Home