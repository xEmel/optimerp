import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "../components/Button/Button"
import styled from "styled-components"
import { Header } from "../components/Header/Header"
import { AboutProject } from "../components/Sections/AboutProject"
import { FirstStepsSection } from "../components/Sections/FirstSteps"
import { DifferentSection } from "../components/Sections/DifferentSection"
import { PartTimeJobsSection } from "../components/Sections/PartTimeJobsSection"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Strona główna" />
      <AboutProject />
      <FirstStepsSection />
      <DifferentSection />
      <PartTimeJobsSection />
    </Layout>
  )
}

export default IndexPage
