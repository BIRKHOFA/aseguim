import React, { useState } from "react"
import { blog } from "../../../dummydata"
import "./footer.css"
import { Link } from "react-router-dom"
import {info_pied_page} from "../../../dummydata"

const Footer = () => {
  const [setClick] = useState(false)
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Rester connecter pour recevoir les mise à jour</h1>
            <span>Aseguim notre cause commune</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>ASEGUIM</h1>
            <span>PLATEFORM EN LIGNE </span>
            <a href="https://fr-fr.facebook.com/aseguim.mohammedia.9/" target="_blank" rel="noreferrer"><i className='fab fa-facebook-f icon'></i></a>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul onClick={() => setClick(false)}>
              <li><Link to='/about'>A propos de nous</Link></li>
              <li><Link to='/courses'>Ressources Scolaire</Link></li>
              <li><Link to='/journal'>Blog</Link></li>
              <li><Link to='/contact'>Nous Contacter</Link></li>
            </ul>
          </div>
          {/* <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div> */}
          <div className='box'>
            <h3>Publications Recentes</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Vous Avez Une Question?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                {/* Hay Riyad Mohammedia Avenue Hassan II */}
                {info_pied_page.address}
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                {info_pied_page.telephone}
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                {info_pied_page.email}
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2022 All rights reserved | This website is made with <i className='fa fa-heart'></i> by Aseguim Mohammedia
        </p>
      </div>
    </>
  )
}

export default Footer
