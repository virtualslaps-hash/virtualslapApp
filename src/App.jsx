import { Routes, Route } from 'react-router-dom'
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
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import { useReveal } from './hooks/useReveal.js'

function Home() {
  useReveal()
  return (
    <>
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

export default function App() {
  return (
    <>
      {/* <Cursor /> */}
      <DotCanvas />
      <div className="radial-center" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  )
}
