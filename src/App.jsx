import './App.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import About from './pages/About/about'
import Header from './components/header'
import Contact from './pages/Contact/contact'
import Harley from './pages/About/Work/Harley/harley'
import Footer from './components/footer'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/work/harley-davidson" element={<Harley />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
