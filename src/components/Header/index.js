import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { media } from '../../utils/style.js'
import { Container } from '../Container'

const menus = [ 
  {name: 'Post', route: '/'},
  {name: 'About', route: '/about'}
]

export const Header = () => (
  <Container>
    <Nav>
      <Link to="/">
        <header>Camels and Snakes</header>
      </Link>
      <Menus>
        {menus.map(menu => 
          <Menu>
            <Link to={menu.route}>
            {menu.name}
            </Link>
          </Menu>
        )}
      </Menus>
    </Nav>
  </Container>
)

const Nav = styled.nav`
  padding: 72px 0 56px 0;
  display: flex;
  justify-content: space-between;
  ${media.tablet`padding: 48px 16px;`}
  a {
    text-decoration: none;
    color: #303030;
    font-size: 20px;
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
