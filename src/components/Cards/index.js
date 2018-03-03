import React from 'react'
import styled from 'styled-components'
import { Container } from '../Container'
import { media } from '../../utils/style.js'

export const Cards = ({children}) => (
  <Container>
    <Wrapper>
      {children}
    </Wrapper>
  </Container>
)

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(160px, auto);
  grid-gap: 32px;
  margin-bottom: 80px;
  ${media.tablet`
    padding: 0 16px;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(120px, auto);
  `}
  ${media.phone`
    grid-template-columns: repeat(2, 1fr);
  `}
`