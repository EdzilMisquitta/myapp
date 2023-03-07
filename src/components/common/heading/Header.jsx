import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"
import React from "react"

const Header = () => {

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className="flexSB">
            <li> <Link to=''>Home</Link></li>
            <li><Link to=''>Job</Link></li>
            <li><Link to=''>Test</Link></li>
            <li><Link to=''>Profile</Link></li>
          </ul>
          <div className="start">
            <div className="button">Somaiya University</div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header