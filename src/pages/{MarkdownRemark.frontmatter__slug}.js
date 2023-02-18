import React from 'react'
import { graphql, Link } from 'gatsby'
import {SectionContainer} from '../components/SectionContainer'
import { Button, Content, Heading } from 'react-bulma-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { GithubButton } from '../components/GithubButton'
import { SEO } from '../components/SEO'

library.add(faCircleArrowLeft)

export default function Template({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  let github
  if (!!frontmatter.github) github = frontmatter.github
  return (
    <main>
      <SectionContainer name="content" color="#1f2424">
        <Link to="/">
          <Button size='small'>
            <FontAwesomeIcon icon={['fas', 'circle-arrow-left']} />
            <span style={{ paddingLeft: '5px' }}>Return</span>
          </Button>
        </Link>
        {!!github && <div style={{display: 'inline-block', float: 'right'}}><GithubButton repo={github}></GithubButton></div>}

        <Heading style={{marginTop: '25px'}}>{frontmatter.title}</Heading>
        <Content>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Content>
      </SectionContainer>
    </main>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        github
      }
    }
  }
`

export const Head = (data) => <SEO 
    title={data.data.markdownRemark.frontmatter.title}
  />