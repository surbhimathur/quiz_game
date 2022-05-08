import { Link } from 'react-router-dom'
import React from 'react'
import headerimage from "../src/headerimage.png";

function Header() {
  return (
    <div className="header">        {/* header displayed on every page i.e. quiz name*/}
        <Link to='/' className="quiz_link">
          <img src={headerimage} alt="headerimage" />
        </Link>     
    </div>
  )
}

export default Header