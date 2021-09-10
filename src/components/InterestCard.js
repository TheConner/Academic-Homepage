import React, { useEffect } from 'react';
import { Card, Content, Heading } from 'react-bulma-components';
import ReactCardFlip from 'react-card-flip';

// TODO: rewrite with react hooks
const InterestCard = ({interestName, interestDesc}) => {
    const [isFlipped, setIsFlipped] = React.useState(false);

    return (
        <ReactCardFlip isFlipped={isFlipped}>
            <Card 
                onMouseDown={() => setIsFlipped((prev) => !prev)}>
                <Card.Content>
                    <Heading>{interestName}</Heading>
                </Card.Content>
            </Card>

            <Card 
                onMouseDown={() => setIsFlipped((prev) => !prev)}>
                <Card.Content>
                        <Heading>{interestName}</Heading>
                        <Content>
                            <div dangerouslySetInnerHTML={{__html: interestDesc}}></div>
                        </Content>
                </Card.Content>
            </Card>
        </ReactCardFlip>
      );

}

export default InterestCard;