import React from 'react'
import styled from 'styled-components'
import { media } from '../../utils/style.js'
import './index.css';

export const Post = ({title, date, html}) => (
  <PostBase>
    <h1>{title}</h1>
    <p>{date}</p>
    <Hr/>
    <Content dangerouslySetInnerHTML={{__html: html}}/>
  </PostBase>
)

const PostBase = styled.div`
  font-family: 'Noto Sans';
  position: relative;
  ${media.tablet`
    padding: 0 16px;
  `}
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
  p {
    margin-top: 0;
    margin-bottom: 24px;
  }
  ${media.tablet`
    width: 100%;
  `}
  hr {
    margin: 32px 0;
    border: 0.5px solid #ddd;
  }
`