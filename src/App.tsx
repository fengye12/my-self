import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Business from './components/Business'
import Resources from './components/Resources'
import Methodology from './components/Methodology'
import Footer from './components/Footer'

function App() {
  return (
    <div className="grain-overlay">
      <Nav />
      <Hero />
      <About />
      <Business />
      <Resources />
      <Methodology />
      <Footer />
    </div>
  )
}

export default App
