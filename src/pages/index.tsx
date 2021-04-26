import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { AboutProject } from "../components/Sections/AboutProject"
import { FirstStepsSection } from "../components/Sections/FirstSteps"
import { OurAssumptions } from "../components/Sections/OurAssumptions"
import { PartTimeJobs } from "../components/Sections/PartTimeJobs"
import { Qualities } from "../components/Sections/Qualities"
import { Faq } from "../components/Sections/Faq"
import { useRef } from "react"
import { Nav } from "../components/Header/Nav/Nav"
import { Header } from "../components/Header/Header"

export type Refs = {
  aboutRef: React.RefObject<HTMLElement>
  partTimeRef: React.RefObject<HTMLElement>
  firstStepsRef: React.RefObject<HTMLElement>
  faqRef: React.RefObject<HTMLElement>
  headerRef: React.RefObject<HTMLElement>
}

const IndexPage = () => {
  const refs: Refs = {
    aboutRef: useRef<HTMLElement>(null),
    partTimeRef: useRef<HTMLElement>(null),
    firstStepsRef: useRef<HTMLElement>(null),
    faqRef: useRef<HTMLElement>(null),
    headerRef: useRef<HTMLElement>(null),
  }
  return (
    <Layout>
      <SEO title="Strona główna" />
      <Header refs={refs} ref={refs.headerRef} />
      <AboutProject ref={refs.aboutRef} />
      <PartTimeJobs ref={refs.partTimeRef} />
      <FirstStepsSection ref={refs.firstStepsRef} />
      <OurAssumptions />
      <Qualities />
      <Faq ref={refs.faqRef} />
    </Layout>
  )
}

export default IndexPage
