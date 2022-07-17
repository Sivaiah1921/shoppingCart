import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import maxwidth_hader from "../Assets/header.svg"
import shoppingBag from "../Assets/shopping-bag.svg";
import Search from "../Assets/search.svg";
import User from "../Assets/user.svg";
import menu from "../Assets/menu.svg"

import './Header.scss'

export class Header extends Component {
  state={
    toggle:false
  }

  handleOpen = ()=>{
    this.setState({toggle : true})
  }
  handleClose =()=>{
    this.setState({toggle : false})
  }


  render() {
    const {toggle} = this.state

    console.log(toggle,"toggleSpan")
    return (
      <>
        <div className="header">
          {/* <img src={max-width_header.svg} alt="maxwidth" /> */}
          <div className="header__Start">
            <div><span className='header__StartSpan'>V</span>ENIA</div>

          </div>
          <div className="header__Center">
            <div>Women</div>
            <div>Men</div>
            <div>Smart Gear</div>
            <div>Accessories</div>
          </div>
          <div className="header__Last">
            <div className="header__Last__search">
              {" "}
              <img src={Search} alt="search" />
              Search
            </div>
            <div className="header__Last__user">
              {" "}
              <img src={User} alt="User" />
              SignIn
            </div>
            <div className="nav-item">
              <Link to="/carts">
                <img src={shoppingBag} alt="text" />
              </Link>
            </div>
          </div>
        </div>
        <div className="headerSm">
          <img className='headerSm__start' src={menu} alt="menu" onClick={this.handleOpen} />
          <div><span className='headerSm__middle'>V</span>ENIA</div>
          <div className='headerSm__last'>
            <img src={Search} alt="search" />
            <Link to="/carts">
              <img src={shoppingBag} alt="text" />
            </Link>
          </div>

        </div>
        { toggle && (
                  <div className="headerSmSidebar">
                  <div onClick={this.handleClose}>X</div>
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
}
const mapStateToProps = (state) => {
  return {
    numberCart: state._todoProduct.numberCart
  };
};
export default connect(mapStateToProps, null)(Header);
