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
            <li>
              <Link to='/'>Accueil</Link>
            </li>
            <li>
              <Link to='/courses'>Les Ressources Scolaire</Link>
            </li>
            <li>
              <Link to='/about'>A propos de l'association</Link>
            </li>
            <li>
              <Link to='/team'>L'Equipe</Link>
            </li>
            {/* <li>
              <Link to='/pricing'>Pricing</Link>
            </li> */}
            <li>
              <Link to='/journal'>Actualités</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <div className='start'>
            
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
