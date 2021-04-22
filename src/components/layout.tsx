/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./styles/layout.css"
import styled from "styled-components"
import { Header } from "./Header/Header"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme"
import { SectionTitle } from "./Sections/SectionTitle"
import { Nav } from "./Header/Nav/Nav"

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </ThemeProvider>
  )
}

export default Layout
