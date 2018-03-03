import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Post } from '../components/Post'

const Template = ({ data, location, pathContext }) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const { title, date } = frontmatter

  return (
    <div>
      <Helmet title={`${title} - Camels and Snakes`}/>
      <Post title={title} date={date} html={html}/>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date
        path
        tags
        excerpt
      }
    }
  }
`

export default Template