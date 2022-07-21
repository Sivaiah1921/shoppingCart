import React, { useState } from "react";
import { Link,NavLink} from "react-router-dom";
import { connect } from "react-redux";

import shoppingBag from "../Assets/shopping-bag.svg";
import Search from "../Assets/search.svg";
import User from "../Assets/user.svg";
import menu from "../Assets/menu.svg"
import Login from "./Signin/Login";
import './Header.scss'

const Header = () =>{
    const [toggle,setToggle] = useState(false)
    const [show,setShow] = useState( false)

    const handleOpen = () =>{
      setToggle({toggle: true})
    }

    const handleClose = () =>{
      setToggle({toggle: false})
    }
    const handleShowLogin = ()=>{
      setShow(true)
    }
    const handleShowLoginoff =()=>{
      setShow(false)
    }

     return (
      <>
        <div className="header">
     
          <div className="header__logo">
            <Link><span className='header__StartSpan'>V</span>ENIA</Link>

          </div>
          <div className="header__Center">
           
            <li><NavLink to={'/'}>Women</NavLink></li>
            <li><NavLink to={'/men'}>Men</NavLink></li>
            <li><NavLink to={'/Smart Gear'}>Smart Gear</NavLink></li>
            <li><NavLink to={'/Accessories'}>Accessories</NavLink></li>
            
          </div>
          <div className="header__Last">
            <div className="header__Last__search">
              {" "}
              <img src={Search} alt="search" />
              Search
            </div>
            <div className="header__Last__user" onMouseOver={handleShowLogin} onMouseLeave={handleShowLoginoff}>
              {" "}
              <img src={User} alt="User" />
              SignIn
              {show &&  <div className="header__hover">
                <Login  />
                </div>}
            </div>
            <div className="nav-item">
              <Link to="/carts">
                <img src={shoppingBag} alt="text" />
              </Link>
            </div>
          </div>
        </div>
        <div className="headerSm">
          <img className='headerSm__start' src={menu} alt="menu" onClick={handleOpen} />
          <div className='headerSm__text'><span className='headerSm__middle'>V</span>ENIA</div>
          <div className='headerSm__last'>
            <img src={Search} alt="search" />
            <Link to="/carts">
              <img src={shoppingBag} alt="text" />
            </Link>
          </div>

        </div>
        { toggle && (
                  <div className="headerSmSidebar">
                  <div onClick={handleClose}>X</div>
                  <div>item1</div>
                  <div>item1</div>
                  <div>item1</div>
                  <div>item1</div>
                  <div>item1</div>
                  <div>item1</div>
                </div>
        )}

        
      </>
    ); 
}


const mapStateToProps = (state) => {
  return {
    numberCart: state._todoProduct.numberCart
  };
};
export default connect(mapStateToProps, null)(Header);
