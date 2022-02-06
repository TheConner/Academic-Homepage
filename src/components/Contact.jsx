import * as React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Hero } from 'react-bulma-components'

const Contact = ({ contactData }) => {
  return (
    <div>
      <Hero.Header>
        <h2 className="title">Contact</h2>
      </Hero.Header>
      <p>There are a few ways to get in touch with me</p>
      <ul style={{ whiteSpace: 'pre-wrap' }}>
        {contactData.map((contact, i) => {
          return (
            <li key={'contact-' + i}>
              <FontAwesomeIcon
                icon={[contact.icon.family, contact.icon.name]}
              />
              {'  '}
              <span
                dangerouslySetInnerHTML={{ __html: contact.description }}
              ></span>
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
    </div>
  )
}

export default Contact
