import * as React from 'react'
import { graphql } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowLeft,
  faCheck,
  faEnvelope,
  faExclamationTriangle,
  faLink,
  fas,
  faWindowClose,
} from '@fortawesome/free-solid-svg-icons'
import {
  fab,
  faGithub,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons'

import { LandingPage } from '../components/LandingPage'
import { InterestPage } from '../components/InterestPage'
import { Technologies } from '../components/Technologies'
import { Contact } from '../components/Contact'
import { LicenceViewer } from '../components/LicenceViewer'

import '../components/GlobalStyles.scss'
import { SectionContainer } from '../components/SectionContainer'
import { SEO } from '../components/SEO'
import { Resources } from '../components/Resources'

library.add(
  faCheck,
  faExclamationTriangle,
  faEnvelope,
  faGithubSquare,
  faWindowClose,
  faGithub,
  faLink,
)

// markup
const IndexPage = ({ data }) => {
  return (
    <main>
      <div id="top">
        <LandingPage></LandingPage>
      </div>
      <div className="segment-divider"> </div>
      <SectionContainer color="#294d46" name="intro">
        <InterestPage interestData={data.allInterestsJson.nodes}>
          {' '}
        </InterestPage>
      </SectionContainer>
      <div className="segment-divider"> </div>
      <SectionContainer color="#38485e" name="resources">
        <Resources resourceData={data.allMarkdownRemark.nodes}></Resources>
      </SectionContainer>
      <div className="segment-divider"> </div>
      <SectionContainer color="#684756">
        <Technologies> </Technologies>
      </SectionContainer>
      <div className="segment-divider"> </div>
      <div id="contact"></div>
      <SectionContainer color="#96705b">
        <Contact contactData={data.allContactJson.nodes} />
      </SectionContainer>
      <div className="segment-divider"> </div>
      <div id="footer" style={{ padding: '5vh' }}>
        <LicenceViewer></LicenceViewer>
      </div>
    </main>
  )
}

export const query = graphql`
  {
    allContactJson {
      nodes {
        description
        icon {
          family
          name
        }
        id
      }
    }
    allInterestsJson {
      nodes {
        id
        row {
          interestDesc
          interestName
        }
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { active: { eq: true } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        frontmatter {
          date
          description
          slug
          title
          github
        }
      }
    }
  }
`

export default IndexPage

export const Head = () => <SEO />
