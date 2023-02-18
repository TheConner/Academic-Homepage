import * as React from 'react'
import { Container, Hero } from 'react-bulma-components/esm'

import './SectionContainer.scss'

export const SectionContainer = ({ children, color, className, name }) => {
  let styles = {}

  if (!!color) {
    styles['backgroundColor'] = color
  }

  return (
    <div id={name} style={{ backgroundColor: color }}>
      <Container className="section-container">
        <Hero style={{ backgroundColor: color }}>
          <Hero.Body>
            <div className={!!className ? className : ''}>{children}</div>
          </Hero.Body>
        </Hero>
      </Container>
    </div>
  )
}