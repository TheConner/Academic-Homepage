import * as React from 'react'

import {AboutCard} from './AboutCard'

// Use the JS for the particles system
import './LandingPage.scss';

// First screen that the users will see
export const LandingPage = ({ aboutData }) => {
  if (typeof window !== `undefined`) {
    import('particles.js')
    .then(() => {
      window.particlesJS.load(
        'particles-container',
        'json/particles.json',
        function () {
          console.log('Hello There :)')
        },
      )
    })
  }

  const scrollToAnchor = (anchorName) => {
    document.querySelector(`#${anchorName}`).scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <div id="particles-container" className="particles-container">
      <AboutCard aboutData={aboutData} />

      <a className="arrow-container" onClick={() => scrollToAnchor('intro')}>
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>
      </a>
    </div>
  )
}