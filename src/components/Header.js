import React, { useState } from "react";
import { Link,NavLink} from "react-router-dom";
import { connect } from "react-redux";

import shoppingBag from "../Assets/shopping-bag.svg";
import Search from "../Assets/search.svg";
import User from "../Assets/user.svg";
import menu from "../Assets/menu.svg"
import Login from "./Signin/Login";
import './Header.scss'

const Header = ({items,numberCart}) =>{
    const [toggle,setToggle] = useState( false )
    const [show,setShow] = useState( false)

    const handleOpen = () =>{
      setToggle( true)
    }

    const handleClose = () =>{
      setToggle(  false )
    }
    const handleShowLogin = ()=>{
      setShow(true)
    }
    const handleShowLoginoff =()=>{
      setShow(false)
    }

    console.log(items.Carts.length,"items,numberCart")
     return (
      <>
        <div className="header">
     
          <div className="header__logo">
            <Link to='/'><span className='header__StartSpan'>V</span>ENIA</Link>

          </div>
          <div className="header__Center">
            {/* <li className="header__CenterLi"><NavLink to={'/Home'}>Home</NavLink></li> */}
            <li className="header__CenterLi"><NavLink to={'/Women'}>Women</NavLink></li>
            <li className="header__CenterLi"><NavLink to={'/Men'}>Men</NavLink></li>
            <li className="header__CenterLi"><NavLink to={'/Smart Gear'}>Smart Gear</NavLink></li>
            <li className="header__CenterLi"><NavLink to={'/Accessories'}>Accessories</NavLink></li>
            
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
            <div className="header__Cartbag">
              <Link to="/carts">
                <img src={shoppingBag} alt="text" />
              </Link>
              <span>{items.Carts.length}</span>
            </div>
          </div>
        </div>
        <div className="headerSm">
          <img className='headerSm__start' src={menu} alt="menu" onClick={handleOpen} />
          <div className='headerSm__text'><span className='headerSm__middle'>V</span>ENIA</div>
          <div className='headerSm__last'>
            <img src={Search} alt="search" />
            <div className="header__Cartbag">
              <Link to="/carts">
                <img src={shoppingBag} alt="text" />
              </Link>
              <span>{items.Carts.length}</span>
            </div>
          </div>

        </div>
        { toggle === true && (
                  <div className="headerSmSidebar">
                  <div onClick={handleClose}>X</div>
                 
                  <h5>Shop Catogories</h5>
                  
                  <span ><NavLink to={'/Women'}>Women</NavLink></span>
                  <span ><NavLink to={'/Men'}>Men</NavLink></span>
                  < span><NavLink to={'/Smart Gear'}>Smart Gear</NavLink></span>
                  < span><NavLink to={'/Accessories'}>Accessories</NavLink></span>
             
                </div>
        )}

        
      </>
    ); 
}


const mapStateToProps = (state) => {
  return {
    numberCart: state._todoProduct.numberCart,
    items: state._todoProduct
  };
};
export default connect(mapStateToProps, null)(Header);


