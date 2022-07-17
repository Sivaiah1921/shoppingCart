import React from 'react'
import { Link } from "react-router-dom";
import './Footer.scss'
import instagram from '../Assets/instagram.svg'
import facebook from '../Assets/facebook.svg'
import twitter from '../Assets/twitter.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__top'>
        <div className='footer__first'>
          <Link to="/">Account</Link>
          <Link to="/">Sign In</Link>
          <Link to="/">Register</Link>
          <div>Order Status</div>
        </div>
        <div className='footer__second'>
          <div >About us</div>
          <div>Our Story</div>
          <div>Carers</div>
        </div>
        <div className='footer__third'>
          <div>Help</div>
          <div>Contact Us</div>
          <div>Order Status</div>
          <div>Returns</div>
        </div>
        <div className='footer__fourth'>
          <div >Follow Us! </div>
          <div> Lorem ipsum dolor sit amet,consectetur</div>
          <div>adipiscing elit,et do elusmod tempor</div>
          <div> incididunt ut labore et dolore.  </div>
          <div className='footer__Icons'>
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
        </div>
        </div>

      </div>

      <div className='footer__bottom'>
        <div><span className='footer__bottomSpan'>V</span>ENIA</div>
        <p>@Comapany ame Address Ave,City Name,State ZIP</p>
        <div className='footer__bottomSection'>
        <div>Terms of Use</div>
        <div>Privacy Policy</div>

        </div>

      </div>
    </div>

  )
}

export default Footer
