import React from 'react'
import { Card } from '../components/Card'
import { Cards } from '../components/Cards'

const IndexPage = ({data}) => {
  const posts = data.allMarkdownRemark.edges
  posts.sort(function(x, y) {
    const dateX = new Date(x.node.frontmatter.date)
    const dateY = new Date(y.node.frontmatter.date)
    return dateY - dateX
  })
  return (
    <Cards>
      {posts.map(({node: post}, index) => {
        const { frontmatter } = post
        return (
          <Card 
            key={index}
            postType={frontmatter.type}
            path={frontmatter.path}
            title={frontmatter.title}
            date={frontmatter.date}
            excerpt={frontmatter.excerpt}
            tags={frontmatter.tags}
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
