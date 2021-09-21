import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Hero } from 'react-bulma-components'
import './Contact.scss'


function Contact({contactData}) {
  return (
    <div className="contact-container">
      <Hero>
        <Hero.Body className="hero-container">
          <Hero.Header>
            <h2 className="title">Contact</h2>
          </Hero.Header>
          <p>There are a few ways to get in touch with me</p>
          <ul style={{ whiteSpace: 'pre-wrap' }}>
            {contactData.map((contact, i) => {
              return (
                <li key={"contact-" + i}>
                  <FontAwesomeIcon icon={[contact.icon.family, contact.icon.name]} />
                  {'  '}
                  <span dangerouslySetInnerHTML={{ __html:contact.description}}></span>
                </li>
              )
            })}
          </ul>

          <br />
          <br />
          <b>Curious about the website? </b> sources are available{' '}
          <a
            href="https://github.com/TheConner/Academic-Homepage"
            target="_blank"
            rel="noreferrer"
          >
            on my GitHub
          </a>
        </Hero.Body>
      </Hero>
    </div>
  )
}

export default Contact
