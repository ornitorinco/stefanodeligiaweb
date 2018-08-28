import React from 'react'
import Link from 'gatsby-link'
import './header.css'

const backgroundColor = '#5D5C61';
const fontColor = '#938E94';
const fontColorHome = '#B1A296';

const Header = () => (
  <div className='header'
    style={{
      background: backgroundColor,
      marginBottom: '1.45rem',
    }}
  >
  <div/>
        <Link
          className='link'
          to="/"
          style={{
            color: fontColorHome,
            textDecoration: 'none',
            margin: '15'
          }}
        >
          Home
        </Link>
        <Link
          className='link'
          to="/curriculum"
          style={{
            color: fontColor,
            textDecoration: 'none',
            margin: '15'
          }}
        >
          Profilo
        </Link>
        <Link
          className='link'
          to="/osteopatia"
          style={{
            color: fontColor,
            textDecoration: 'none',
            margin: '15'
          }}
        >
          L'Osteopatia
        </Link>
        <Link
          className='link'
          to="/news"
          style={{
            color: fontColor,
            textDecoration: 'none',
            margin: '15'
          }}
        >
          News
        </Link>
        <Link
          className='link'
          to="/contatti"
          style={{
            color: fontColor,
            textDecoration: 'none',
            margin: '15'
          }}
        >
          Contatti
        </Link>

  <div/>
  </div>
)

export default Header
