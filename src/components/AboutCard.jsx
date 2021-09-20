import { Card, Content, Heading, Image, Media } from 'react-bulma-components'
import './AboutCard.scss'

export function AboutCard({ aboutData }) {
  return (
    <Card className="AboutCard" style={{ width: 400, margin: 'auto' }}>
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" align="left">
            <Image
              rounded={true}
              size={128}
              alt="128x128"
              src={aboutData.AboutImage}
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

/**
 * I am a Master's of Computer Science Student at Carleton University. My research interests are in the field of <strong>cybersecurity</strong>, specifically <strong>IoT Security</strong>. Previously I did research in the field of <strong>data science</strong>.
 */
