import { Columns } from 'react-bulma-components'
import InterestCard from './InterestCard'
import './IntroPage.scss'
import ResearchComponent from './Research'

function InterestPage({ interestData }) {
  // Global as in, it influences all cards. It's not truly global.

  return (
    <div className="intro-container">
      <section className="hero">
        <div className="hero-body hero-container">
          <h2 className="title">Research Interests</h2>

          <p className="subtitle">
            Click one of my interest cards to learn more.
          </p>

          {interestData.map((row, i) => {
            // Render each row
            return (
              <Columns key={i + '-colset'}>
                {row.map((col, j) => {
                  return (
                    <Columns.Column key={i + '-' + j + '-col'}>
                      <InterestCard key={i + '-' + j + '-card'} {...col} />
                    </Columns.Column>
                  )
                })}
              </Columns>
            )
          })}

          {/*
          <ResearchComponent></ResearchComponent>
          */}
        </div>
      </section>
    </div>
  )
}

export default InterestPage
