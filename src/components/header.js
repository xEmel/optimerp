import * as React from "react";
import { Link } from "gatsby";
const Header = ({ siteTitle }) => (React.createElement("header", { style: {
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
    } },
    React.createElement("div", { style: {
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
        } },
        React.createElement("h1", { style: { margin: 0 } },
            React.createElement(Link, { to: "/", style: {
                    color: `white`,
                    textDecoration: `none`,
                } }, siteTitle)))));
export default Header;
