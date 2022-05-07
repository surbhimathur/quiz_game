import { Link } from 'react-router-dom'
import React from 'react'
import headerimage from "../src/headerimage.png";

function Header() {
  return (
    <div className="header">
        <Link to='/' className="quiz_link">
          <img src={headerimage} alt="headerimage" />
        </Link>     
    </div>
  )
}

export default Header