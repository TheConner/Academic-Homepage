import * as React from 'react'
import { AboutCard } from './AboutCard'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'

// Use the JS for the particles system
import './LandingPage.scss'

// First screen that the users will see
export const LandingPage = ({ aboutData }) => {
  const particlesInit = React.useCallback(async (engine) => {
    console.log(engine)
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = React.useCallback(async (container) => {
    await console.log(container)
  }, [])

  const scrollToAnchor = (anchorName) => {
    document.querySelector(`#${anchorName}`).scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="particles-container"
        options={{
          fullScreen: {
            enable: false
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100,
              max: 100
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <AboutCard aboutData={aboutData} />

      <a className="arrow-container" onClick={() => scrollToAnchor('intro')}>
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>
      </a>
    </div>
  )
}
