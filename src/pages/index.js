import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Benvenuto nello spazio web del dottor Stefano Deligia</h1>
    <p>Scrivi qua un messaggio di benvenuto.</p>
    <p>Il messaggio di benvenuto continua.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
