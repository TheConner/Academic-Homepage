import { Card, Content, Heading, Image, Media } from "react-bulma-components";
import './AboutCard.scss';

export function AboutCard() {
    return (
      <Card className="AboutCard" style={{ width: 400, margin: 'auto' }}>
        <Card.Content>
          <Media>
            <Media.Item renderAs="figure" align="left">
              <Image
                rounded={true}
                size={128}
                alt="128x128"
                src="./assets/Me.jpg"
              />
            </Media.Item>
            <Media.Item>
              <Heading size={4}>Conner Bradley</Heading>
              <Heading subtitle size={6}>
                BCS, MCS Student, Computer Science Researcher
              </Heading>
            </Media.Item>
          </Media>
          <Content>
            Hello! Welcome to my academic homepage. I am a Master's of Computer Science student under the supervision of <a href="https://dbarrera.xyz/">David Barrera</a>
          </Content>
        </Card.Content>
      </Card>
    );
  }

  /**
   * I am a Master's of Computer Science Student at Carleton University. My research interests are in the field of <strong>cybersecurity</strong>, specifically <strong>IoT Security</strong>. Previously I did research in the field of <strong>data science</strong>.
   */