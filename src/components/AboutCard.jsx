import * as React from 'react'

import { Card, Content, Heading, Image, Media } from 'react-bulma-components'
import './AboutCard.scss'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const AboutCard = ({ }) => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      aboutJson {
        AboutImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        Name
        Occupation
        ShortBio
      }
    }
  `);
  const aboutData = data.aboutJson
  
  const aboutImage = getImage(aboutData.AboutImage);
  console.log(aboutImage, aboutData)

  return (
    <Card className="AboutCard" style={{ width: 400, margin: 'auto' }}>
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" align="left">
            <GatsbyImage
                className='aboutImage'
                size={128}
                alt="Image"
                image={aboutImage}
              />
          </Media.Item>
          <Media.Item>
            <Heading size={4}>{aboutData.Name}</Heading>
            <Heading subtitle size={6}>
              {aboutData.Occupation}
            </Heading>
          </Media.Item>
        </Media>
        <Content
          className="card-content-center"
          dangerouslySetInnerHTML={{ __html: aboutData.ShortBio }}
        ></Content>
      </Card.Content>
    </Card>
  )
}