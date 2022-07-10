import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../../src/styles.css";
export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div>Venia</div>
        <div className="headerCenter">
          <div>women</div>
          <div>men</div>
          <div>Smart Gear</div>
          <div>Accessories</div>
        </div>
        <div className="headerLast">
          <div>Search</div>
          <div>SignIn</div>
          <div className="nav-item">
            <Link to="/carts" className="nav-link">
              Carts : {this.props.numberCart}
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
