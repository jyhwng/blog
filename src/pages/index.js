import React from 'react'
import { Card } from '../components/Card'
import { Cards } from '../components/Cards'

const IndexPage = ({data}) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Cards>
      {posts.map(({node: post}) => {
        const { frontmatter } = post
        return (
          <Card postType={frontmatter.type}
            path={frontmatter.path}
            title={frontmatter.title}
            date={frontmatter.date}
            excerpt={frontmatter.excerpt}
          />
        )
      })}
    </Cards>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            path
            tags
            excerpt
            type
          }
        }
      }
    }
  }
`

export default IndexPage
