import Cursor from './components/Cursor.jsx'
import DotCanvas from './components/DotCanvas.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import WhatWeAre from './components/WhatWeAre.jsx'
import Services from './components/Services.jsx'
import WhoWeServe from './components/WhoWeServe.jsx'
import Market from './components/Market.jsx'
import Positioning from './components/Positioning.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'
import { useReveal } from './hooks/useReveal.js'

export default function App() {
  useReveal()
  return (
    <>
      {/* <Cursor /> */}
      <DotCanvas />
      <div className="radial-center" />
      <Navbar />
      <Hero />
      <Marquee />
      <WhatWeAre />
      <Services />
      <WhoWeServe />
      <Market />
      <Positioning />
      <CTA />
      <Footer />
    </>
  )
}
