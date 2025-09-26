import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useEffect, useRef } from "react"
import LocomotiveScroll from "locomotive-scroll";
import Header from "./Header/Header.jsx"
import Home from "./Home/Home.jsx"
import Contact from "./Contact/Contact.jsx"
import Footer from "./Footer/Footer.jsx"
import About from "./About/About.jsx"
import Works from "./My_work/Works.jsx"
import './App.css'

function App() {
   const containerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);


  return (
    <div data-scroll-container ref={containerRef}>

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> }data-scroll data-scroll-speed="-1"  />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/myworks" element={ <Works /> } />
      </Routes>
      <Footer />
    </Router>
    </div>
  )
}

export default App
