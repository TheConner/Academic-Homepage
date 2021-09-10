import { AboutCard } from './AboutCard';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// Use the JS for the particles system
import { useEffect } from 'react';
import "particles.js";

// First screen that the users will see
function LandingPage() {
    useEffect(() => {
        window.particlesJS.load('particles-container', 'assets/particles.json', function() {
            console.log('Hello There :)');
        });
    })

    return (
        <div id="particles-container" style={{position: 'relative'}, {height: '110vh'}}>
            <AboutCard></AboutCard>

            <AnchorLink className="arrow-container" href="#intro">
                <div className="arrow"></div>
                <div className="arrow"></div>
                <div className="arrow"></div>  
            </AnchorLink>
        </div>
    )
}

export default LandingPage;