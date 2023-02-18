import * as React from 'react'
import { Columns, Hero } from 'react-bulma-components/esm'
import {InterestCard} from './InterestCard'
import {ResearchComponent} from './Research'

import './IntroPage.scss'

export const InterestPage = ({ interestData }) => {
  if (interestData == null) {
    return <p>No InterestData Passed</p>
  }

  interestData = interestData.map((val) => val.row)

  return (
    <div className="intro-page">
      <Hero.Header>
        <h2 className="title">Research Interests</h2>
      </Hero.Header>

      <p className="subtitle">Click one of my interest cards to learn more.</p>

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
      <ResearchComponent></ResearchComponent>
    </div>
  )
}
