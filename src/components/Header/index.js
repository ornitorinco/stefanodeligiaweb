import React from 'react'
import Link from 'gatsby-link'
import './header.css'
import { background, font, specialFont } from '../../layouts/colors.css';

const backgroundColor = background;
const fontColor = font;
const fontColorHome = specialFont;

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
