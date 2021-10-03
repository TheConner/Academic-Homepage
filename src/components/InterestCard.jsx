import React from 'react'
import { Card, Heading } from 'react-bulma-components'

// TODO: rewrite with react hooks
const InterestCard = ({ interestName, interestDesc }) => {
  const [isFlipped, setIsFlipped] = React.useState(false)

  const flipHandler = (event) => {
    if (event.target.tagName.toLowerCase() === 'a') {
      event.preventDefault()
      // Get the a href
      const href = event.target.href

      // Open in new tab
      if (href != null) window.open(href, '_blank').focus()
      else console.error('a has no href :( i no like')
    } else if (event.target.tagName.toLowerCase() !== 'p') {
      // ignore the paragraphs, to allow text selection / copy paste
      setIsFlipped((prev) => !prev)
    }
  }

  return (
    <>
      <Card
        className={isFlipped ? 'card-container-visible' : ''}
        onMouseDown={flipHandler}
      >
        <Card.Content>
          <Heading>{interestName}</Heading>
          <div
            className={
              isFlipped
                ? 'card-transition card-content-visible'
                : 'card-transition card-content-invisible'
            }
          >
            <p dangerouslySetInnerHTML={{ __html: interestDesc }}></p>
          </div>
        </Card.Content>
      </Card>
    </>
  )
}
//
export default InterestCard
