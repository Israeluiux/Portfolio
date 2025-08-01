import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Header/Header.jsx"
import Home from "./Home/Home.jsx"
import './App.css'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        {/* <Route path="/myworks" element={ <Works /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/socials" element={ <Socials /> } /> */}
      </Routes>
    </Router>
  )
}

export default App
