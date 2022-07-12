import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import "../../src/styles.css";
import shoppingBag from "../Assets/shopping-bag.svg";
import Search from "../Assets/search.svg";
import User from "../Assets/user.svg";
import './Header.scss'

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__Start">
          <Link to="/">VENIA</Link>
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
    );
  }
}
const mapStateToProps = (state) => {
  return {
    numberCart: state._todoProduct.numberCart
  };
};
export default connect(mapStateToProps, null)(Header);
