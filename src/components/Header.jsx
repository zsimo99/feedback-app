import React from 'react'
import propTypes from "prop-types"
import { NavLink } from 'react-router-dom'

function Header({text,bgColor,textColor}) {
    const style={
        backgroundColor:bgColor,
        color:textColor,
    }
  return (
    <header style={style} >
      <h1>{text}</h1>
      <div className="links">
      <NavLink to="/" className={(navData) => (navData.isActive ? "active" : 'none')}>Home</NavLink>
      <NavLink to="/about" className={(navData) => (navData.isActive ? "active" : 'none')} >About</NavLink>
      </div>
    </header>
  )
}
Header.defaultProps={
    text:"test",
    bgColor:"rgba(0,0,0,0.4)",
    textColor:"#ff6a95"
  }

Header.propTypes={
    text:propTypes.string.isRequired,
    bgColor:propTypes.string.isRequired,
    textColor:propTypes.string.isRequired
}

export default Header
