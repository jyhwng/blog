import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Header } from '../components/Header'
import { Container } from '../components/Container'
import './index.css'

require("./syntax.css");

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Camels and Snakes"
      meta={[
        { name: 'jyhwng', content: 'blog' },
      ]}
    />
    <Header />
    <Container>
      {children()}
    </Container>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
