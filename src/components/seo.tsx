/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type SeoProps = {
  description?: string
  lang?: string
  meta?: []
  title: string
}

const SEO: React.FC<SeoProps> = ({ description, lang = "pl", meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={"Optime Roleplay"}
      meta={[
        {
          name: `description`,
          content:
            "Optime RP to serwer roleplay stworzony na platformie alt:V z myślą o Tobie. Sprawdź, co dla Ciebie przygotowaliśmy.",
        },
        {
          property: `og:title`,
          content: "Optime Roleplay",
        },
        {
          property: `og:description`,
          content:
            "Tworzymy dla Ciebie miejsce rozgrywki, sprawdź co przygotowaliśmy.",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta || [])}
    />
  )
}

export default SEO
