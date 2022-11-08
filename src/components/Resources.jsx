import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import * as React from 'react'
import { Button, Card, Content, Hero } from 'react-bulma-components'
import { GithubButton } from './GithubButton'

export const Resources = ({resourceData}) => {
  console.log('resources', resourceData)
  return (
    <div className="resources-container">
      <Hero.Header>
        <h2 className='title'>Resources</h2>
      </Hero.Header>
      <Content>
        <ul>
          {resourceData.map((resourcePage, i) => {
            resourcePage = resourcePage.frontmatter;
            return (
              <li key={'resources-ref-'+i}>
                <b>
                  <Link to={resourcePage.slug}>{resourcePage.title}</Link>
                </b>
                {!!resourcePage.github && (
                  <div style={{float: 'right'}}>
                    <GithubButton repo={resourcePage.github}></GithubButton>
                  </div>
                )}
                <p>{resourcePage.description}</p>
              </li>
            )
          })}
        </ul>
      </Content>
    </div>
  )
}