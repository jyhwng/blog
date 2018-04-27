import React, { Component } from 'react'
import styled from 'styled-components'
import { media } from '../../utils/style.js'

export class Footer extends Component {
  state = { isOpen: false }

  handleOpenFooter = () => {
    console.log('clicked')
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <div>
        <FooterBase isOpen={this.state.isOpen}>
          <Wrapper>
              <p>Found an error? Help me correct by submitting issues <a href="https://github.com/jyhwng/blog/" target="_blank">here</a>.</p> 
              <p>© 2017-2018 Jiyoung Hwang</p>
            </Wrapper>
          </FooterBase>
        <Button onClick={this.handleOpenFooter}/>
      </div>
    )
  }
} 

const Button = ({ onClick }) => (
  <ButtonWrapper onClick={onClick}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#303030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
      <line x1="12" y1="17" x2="12" y2="17"></line>
    </svg>
  </ButtonWrapper>
)

const FooterBase = styled.footer`
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  background-color: #fff;
  border-top: 1px solid #ddd;
  transform: translateY(131px);
  ${media.tablet`
    transform: translateY(123px);
    ${props => props.isOpen && `
      transform: translateY(0);
    `}
  `}
  transition: transform 350ms cubic-bezier(0.23, 1, 0.32, 1);
  ${props => props.isOpen && `
    transform: translateY(0);
  `}
`

const Wrapper = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 40px 0;
  p {
    margin: 0;
  }
  ${media.tablet`
    padding: 24px 16px;
  `}
`

const ButtonWrapper = styled.a`
  position: fixed;
  bottom: 24px;
  right: 32px;
  cursor: pointer;
`

