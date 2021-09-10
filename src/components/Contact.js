import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Columns, Container, Heading, Hero, Image } from "react-bulma-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./Contact.scss";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

library.add(
    faEnvelope,
    faGithubSquare
);

function Contact() {
    return(
        <div className="contact-container">
            <Hero>
                <Hero.Body className="hero-container">
                    <Hero.Header>
                        <h2 className="title">Contact</h2>
                    </Hero.Header>
                    
                    <p>There are a few ways to get in touch with me
                    </p>
                    <ul style={{whiteSpace: "pre-wrap"}}>
                        <li key="00">
                            <FontAwesomeIcon icon={["fas", "envelope"]} />  Perform substitutions at the parentheses to get my email: <code>
                                (my first name).(my last name)(at)cmail.carleton.ca
                            </code>
                        </li>
                        <li key="01">
                            <FontAwesomeIcon icon={["fab", "github-square"]} />  Github: <a href="https://github.com/TheConner" target="_blank">TheConner</a>
                        </li>
                    </ul>

                    <br />
                    <br />

                    <b>Curious about the website? </b> sources are available <a href="https://github.com/TheConner/Academic-Homepage" target="_blank">on my GitHub</a>
                </Hero.Body>
            </Hero>
        </div>
    );
}

export default Contact;