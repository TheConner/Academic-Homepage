import React, { useEffect } from 'react';
import { Card, Content, Heading } from 'react-bulma-components';

// TODO: rewrite with react hooks
const InterestCard = ({interestName, interestDesc}) => {
    const [isFlipped, setIsFlipped] = React.useState(false);

    return (
        <div>
            <Card 
                className={isFlipped ? "card-container-visible" : ""}
                onMouseDown={() => setIsFlipped((prev) => !prev)}>
                <Card.Content>
                    <Heading>{interestName}</Heading>
                    <div className={isFlipped? "card-transition card-content-visible" : "card-transition card-content-invisible"} dangerouslySetInnerHTML={{__html: interestDesc}}></div>
                </Card.Content>
            </Card>
        </div>
      );

}
//
export default InterestCard;