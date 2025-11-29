import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Header from "./Header/Header.jsx";
import Home from "./Home/Home.jsx";
import Contact from "./Contact/Contact.jsx";
import Footer from "./Footer/Footer.jsx";
import About from "./About/About.jsx";
import Works from "./My_work/Works.jsx";

function App() {
  //  const containerRef = useRef(null);

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: containerRef.current,
  //     smooth: true,
  //   });

  //   scroll.update();

  //   return () => {
  //     scroll.destroy();
  //   };
  // }, []);

  return (
    // <div data-scroll-container ref={containerRef}>

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/myworks" element={<Works />} />
      </Routes>
      <Footer />
    </Router>
    // </div>
  );
}

export default App;
