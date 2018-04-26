import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { media } from '../../utils/style.js'
import { Container } from '../Container'
import { Menu } from '../Menu'

export class Header extends React.Component {
  state = { isCollapsed: false }

  collapseHeader = () => {
    const navHeight = 22
    const navPaddingTop = 72

    if (window.scrollY > navHeight + navPaddingTop) {
      this.setState({ isCollapsed: true })
    } else {
      this.setState({ isCollapsed: false })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.collapseHeader)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.collapseHeader)
  }

  renderNavOverlay = () => {
    const { isCollapsed } = this.state
    return (
      <TitleOverlay isCollapsed={isCollapsed}>
        <Wrapper>
          <Title/>
          <Menu/>
        </Wrapper>
      </TitleOverlay>
    )
  }

  render() {
    const { isCollapsed } = this.state
    return (
      <Container>
        {this.renderNavOverlay()}
        <Nav>
          <Title/>
          <Menu/>
        </Nav>
      </Container>
    )
  }
}

const Title = () => (
  <Link to="/">
    <span>🐫 and 🐍</span>
  </Link>
)

const NavStyle = `
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    font-weight: bold;
    text-decoration: none;
    color: #303030;
    font-size: 1.2em;
  }
`

const Nav = styled.nav`
  padding: 72px 0 56px 0;
  ${media.tablet`padding: 48px 16px;`}
  ${NavStyle}
`

const TitleOverlay = styled.div`
  z-index: 1;
  left: 0;
  right: 0;
  top: -62px;
  width: 100%;
  padding: 16px 0;
  position: fixed;
  background-color: #fff;
  transition: top 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  border-bottom: 1px solid #ddd;
  ${props => props.isCollapsed && `
    top: 0;
  `}
`

const Wrapper = styled.nav`
  margin: 0 auto;
  max-width: 960px;
  ${media.tablet`padding: 0 16px;`}
  ${NavStyle}  
`
