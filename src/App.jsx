import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Header/Header.jsx"
import Home from "./Home/Home.jsx"
import Contact from "./Contact/Contact.jsx"
import Footer from "./Footer/Footer.jsx"
import './App.css'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/contact" element={ <Contact /> } />
        {/* <Route path="/myworks" element={ <Works /> } />
        <Route path="/about" element={ <About /> } /> */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
