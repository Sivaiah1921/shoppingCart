import React from 'react'
import { Link } from "react-router-dom";
import './Footer.scss'
import instagram from '../Assets/instagram.svg'
import facebook from '../Assets/facebook.svg'
import twitter from '../Assets/twitter.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__first'>
      <Link to="/">Account</Link>
      <div>
      <Link to="/">Sign In</Link>
      </div>
      <div> <Link to="/">Register</Link></div>
      <div>Order Status</div>
            </div>
       <div className='footer__second'>About us
       <div>Our Story</div>
       <div>Carers</div>
        </div>     
      <div className='footer__third'>Help
      <div>Contact Us</div>
      <div>Order Status</div>
      <div>Returns</div>
      </div>
      <div className='footer__fourth'>Follow Us!
        
     <div> Lorem ipsum dolor sit amet,consectetur</div>
     <div>adipiscing elit,et do elusmod tempor</div>
     <div> incididunt ut labore et dolore.  </div>    
        
      </div>
      <div className='footer__fifth'>
        <div className='footer__fifth__instagram'>
        <img src={instagram} alt="instagram" />
        </div>
        <div className='footer__fifth__facebook'>
        <img src={facebook} alt="facebook" />
        </div>
        <div className='footer__fifth__twitter'>
        <img src={twitter} alt="twitter" />
        </div>
      </div>
      {/* <div className='footer__sixth'>VENIA
    <p>Comapany ame Address Ave,City Name,State ZIP</p>
    <div>Terms of Use</div>
    <div>Privacy Policy</div>
    </div> */}
    </div>
  
  )
}

export default Footer
