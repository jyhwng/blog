import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { media } from '../../utils/style.js'
import { Container } from '../Container'

const menus = [ 
  {name: 'Posts', route: '/'},
  {name: 'About', route: '/about'}
]

export const Header = () => (
  <Container>
    <Nav>
      <Link to="/">
        <Title>Camels and Snakes</Title>
      </Link>
      <Menus>
        {menus.map((menu, index) => 
          <Menu key={index}>
            <Link to={menu.route}>
            {menu.name}
            </Link>
          </Menu>
        )}
      </Menus>
    </Nav>
  </Container>
)

const Title = styled.header`
  ${media.phone`max-width: 120px;`}
`

const Nav = styled.nav`
  padding: 72px 0 56px 0;
  display: flex;
  justify-content: space-between;
  ${media.tablet`padding: 48px 16px;`}
  a {
    font-weight: bold;
    text-decoration: none;
    color: #303030;
    font-size: 1.2em;
  }
`

const Menus = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const Menu = styled.li`
  & + & {
    margin-left: 24px;
  }
`
