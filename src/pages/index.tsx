import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { AboutProject } from "../components/Sections/AboutProject"
import { FirstStepsSection } from "../components/Sections/FirstSteps"
import { OurAssumptions } from "../components/Sections/OurAssumptions"
import { PartTimeJobs } from "../components/Sections/PartTimeJobs"
import { Qualities } from "../components/Sections/Qualities"
import { Faq } from "../components/Sections/Faq"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Strona główna" />
      <AboutProject />
      <PartTimeJobs />
      <FirstStepsSection />
      <OurAssumptions />
      <Qualities />
      <Faq />
    </Layout>
  )
}

export default IndexPage
