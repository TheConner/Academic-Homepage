import * as React from "react"
import { graphql } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


import  LandingPage  from '../components/LandingPage';
import  InterestPage  from '../components/InterestPage';
import  Technologies  from '../components/Technologies';
import  Contact  from '../components/Contact';
import  LicenceViewer  from '../components/LicenceViewer';

import "./GlobalStyles.scss"

library.add(fab, fas)

// markup
const IndexPage = ({data}) => {
  console.log(data);
  return (
    <main>
      <div id="top">
        <LandingPage aboutData={data.aboutJson}> </LandingPage>
      </div>
      <div className="segment-divider"> </div>
      <div id="intro">
        <InterestPage interestData={data.allInterestsJson.nodes}> </InterestPage>
      </div>
      <div className="segment-divider"> </div>
      <div id="tech">
        <Technologies technologiesData={data.allTechnologiesJson.nodes}> </Technologies>
      </div>
      <div className="segment-divider"> </div>
      <div id="contact">
        <Contact contactData={data.allContactJson.nodes} />
      </div>
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
  allTechnologiesJson {
    nodes {
      id
      alt
      href
      img
    }
  }
  aboutJson {
    AboutImage
    Name
    Occupation
    ShortBio
  }
}

`

export default IndexPage
