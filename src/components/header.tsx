import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
type HeaderProps = {
  siteTitle?: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <header
    style={{
      background: `transparent`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <StaticImage src="../images/logo_mini.png" alt={"OP"} />
    </div>
  </header>
)

export default Header
