import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      background: '#79cdcd',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1200,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            margin: '30'
          }}
        >
          Home
        </Link>
        <Link
          to="/myProfile"
          style={{
            color: 'black',
            textDecoration: 'none',
            margin: '30'
          }}
        >
          Dr.O. Stefano Deligia
        </Link>
        <Link
          to="/osteopatia"
          style={{
            color: 'black',
            textDecoration: 'none',
            margin: '30'
          }}
        >
          L'Osteopatia
        </Link>
        <Link
          to="/contatti"
          style={{
            color: 'black',
            textDecoration: 'none',
            margin: '30'
          }}
        >
          Contatti
        </Link>
      </h1>
    </div>
  </div>
)

export default Header