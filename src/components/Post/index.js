import React from 'react'
import styled from 'styled-components'
import { media } from '../../utils/style.js'
import { Tag } from '../Tag'
import './index.css';

export const Post = ({frontmatter, html}) => {
  const {title, date, excerpt, tags} = frontmatter
  return (
    <PostBase>
      <h1>{title}</h1>
      <P>{excerpt}</P>
      <div>{tags.map(tag => <Tag>{tag}</Tag>)}</div>
      <P>{date}</P>
      <Hr/>
      <Content dangerouslySetInnerHTML={{__html: html}}/>
    </PostBase>
  )
} 

const PostBase = styled.div`
  font-family: 'Noto Sans';
  position: relative;
  ${media.tablet`
    padding: 0 16px;
  `}
`

const P = styled.p`
  margin: 16px 0;
`

const Hr = styled.hr`
  margin: 72px 0;
  border: 0.5px solid #ddd;
`

const Content = styled.div`
  width: 70%;
  float: right;
  margin-bottom: 160px;
  h2 {
    left: 0;
    width: 25%;
    margin-top: 0;
    position: absolute;
    ${media.tablet`
      width: auto;
      position: relative;
    `}
  }
  ul {
    margin-top: 4px;
  }
  p {
    margin-top: 24px;
    margin-bottom: 0;
  }
  ${media.tablet`
    width: 100%;
  `}
  hr {
    margin: 32px 0;
    border: 0.5px solid #ddd;
  }
  li > p {
    margin-bottom: 0;
  }
  li + li {
    margin-top: 8px;
  }
`