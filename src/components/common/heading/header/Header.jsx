import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"



const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li><Link to='/contact'>Home</Link></li>
            <li><Link to='/contact'>Job</Link></li>
            <li><Link to='/contact'>Test</Link></li>
            <li><Link to='/contact'>Profile</Link></li>
            <li><Link to='/contact'>Login</Link></li>
          </ul>
          <div className="start">
            <div className="button"><b>Somaiya University</b></div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header