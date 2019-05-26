import React from "react"

const Footer = () => (
  <footer style={{padding: '1rem'}}>
    <hr />
    {new Date().getFullYear()}, Built with {` `} <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default Footer