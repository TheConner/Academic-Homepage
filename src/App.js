//import CV from 'react-cv'
import './App.scss';
import Contact from './components/Contact';
import IntroPage from './components/IntroPage';
import LandingPage from './components/LandingPage';
import Technologies from './components/Technologies';
//import { CVData } from './Data';
//import { ThemeSwitcherProvider } from 'react-css-theme-switcher';


const themes = {
  light: 'public/light.css',
  dark: 'public/dark.css',
};

function App() {
  return (
    <div>
      <div id="top">
        <LandingPage></LandingPage>
      </div>

      <div className="segment-divider"></div>

      <div id="intro">
        <IntroPage></IntroPage>
      </div>

      <div className="segment-divider"></div>

      <div id="tech">
        <Technologies></Technologies>
      </div>

      <div className="segment-divider"></div>

      <div id="contact">
        <Contact></Contact>
      </div>

      <div className="segment-divider"></div>

      <div id="footer" style={{padding: "5vh"}}>
      </div>
    </div>
  )
}

export default App;
