//import CV from 'react-cv'
import './App.scss'
import Contact from './components/Contact'
import InterestPage from './components/InterestPage'
import LandingPage from './components/LandingPage'
import Technologies from './components/Technologies'

import { Interests } from './data/Interests';
import { TechnologiesData } from './data/Technologies'

function App() {
  return (
    <div>
      <div id="top">
        <LandingPage> </LandingPage>{' '}
      </div>
      <div className="segment-divider"> </div>
      <div id="intro">
        <InterestPage interestData={Interests}> </InterestPage>{' '}
      </div>
      <div className="segment-divider"> </div>
      <div id="tech">
        <Technologies technologiesData={TechnologiesData}> </Technologies>{' '}
      </div>
      <div className="segment-divider"> </div>
      <div id="contact">
        <Contact> </Contact>{' '}
      </div>
      <div className="segment-divider"> </div>
      <div id="footer" style={{ padding: '5vh' }}></div>{' '}
    </div>
  )
}

export default App
