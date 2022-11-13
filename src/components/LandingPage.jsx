import * as React from 'react'

import AboutCard from './AboutCard'

// Use the JS for the particles system
import { useEffect } from 'react'
import './LandingPage.scss'

require('particles.js')

// First screen that the users will see
function LandingPage({ aboutData }) {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.particlesJS.load(
        'particles-container',
        'assets/particles.json',
        function () {
          console.log('Hello There :)')
        },
      )
    }
  })

  return (
    <div id="particles-container" className="particles-container">
      <AboutCard aboutData={aboutData} />

      <a className="arrow-container" href="#intro">
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>
      </a>
    </div>
  )
}

export default LandingPage
