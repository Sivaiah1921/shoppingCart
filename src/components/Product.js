import React, { Component } from "react";
import { actFetchProductsRequest, AddCart } from "../actions";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import heart from "../Assets/heart.svg";
import sliders from "../Assets/sliders.svg"
import arrowdown from "../Assets/arrow-up.svg"
import arrowup from "../Assets/arrow-down.svg"
import './Product.scss'


export class Product extends Component {
  componentDidMount() {
    this.props.actFetchProductsRequest();
  }

  render() {
    const { _products } = this.props._products;
    console.log(_products, "_products");

    return (
      <div style={{ marginTop: "10px" }}>
        <div className="product">
          <div className="product__banner">
            <div>
              <div>Women's</div>
              {/* <span ></span> */}
            </div>
            <div>AdobeStock</div>


          </div>
          <div className="product__list">
            <div>Clothing /  Women's /  Outerwear</div>
            <div className="product__listright">
              <div>38Results</div>
              <div >
                <select className="product__dropdown">
                  <option value="" >Sort by Latest</option>
                  <option value="" >men's clothing</option>
                  <option value="" >women's clothing</option>
                  <option value="" >jewelery</option>
                  <option value="" >electronics</option>
                </select>
              </div>
            </div>
          </div>

          <div className="product__list__filters">
            <div>
              < img src={sliders} alt="sliders" />
              <span className="product__list__span">Filter Results</span>
            </div>

            <div>
              <div><img src={arrowup} alt="arrow-up" />
                <img src={arrowdown} alt="arrow-down" />
                <span className="product__list__span1"> Sort Products</span></div>

            </div>


          </div>

          <div className="product__listrightsm">
            <div className="product__listrightsm1">Filters</div>
            <div  className="product__listrightsm2">38 Results</div>
          </div>


          <div className="product__main">

            <div className="product__sidebar">
              <div className="product__sidebar__filter">Filters</div>
              <div className="product__sidebar__attribute1">Attribute</div>

              {/* <div className="sidebar__checkbox">       */}
              <div style={{ display: 'flex', gap: "10px" }}><input type='checkbox' /> Option</div>
              <div style={{ display: 'flex', gap: "10px" }}><input type='checkbox' /> Option</div>
              <div style={{ display: 'flex', gap: "10px" }}><input type='checkbox' /> Option</div>
              <div style={{ display: 'flex', gap: "10px" }} ><input type='checkbox' /> Option</div>
              <div style={{ display: 'flex', gap: "10px" }}><input type='checkbox' /> Option</div>

              <div className="product__sidebar__showmore">Show more</div>

              <div className="product__sidebar__attribute2">Attribute</div>
              <div><input type='checkbox' /> Option</div>
              <div><input type='checkbox' /> Option</div>
              <div><input type='checkbox' /> Option</div>
              <div><input type='checkbox' /> Option</div>
              <div><input type='checkbox' /> Option</div>
              <div><input type='checkbox' /> Option</div>

              <div className="product__sidebar__attribute3">Attribute</div>

              <div><input type='checkbox' /> Option</div>
              <div><input type='checkbox' /> Option</div>
              <div><input type='checkbox' /> Option</div>
              <div><input type='checkbox' /> Option</div>
              <div><input type='checkbox' /> Option</div>
              <div><input type='checkbox' /> Option</div>
              {/* </div> */}
            </div>

            <div className="product__listingItems">
              {_products.length === 0 ? (
                <div className="product__listingItems">
                  <h2>Loading...!</h2>
                </div>
              ) : (
                _products.map((item, index) => (
                  <div
                    key={index}
                    className="product__listItem"
                    style={{ marginBottom: "10px" }}
                  >
                    <NavLink to={`/product/${item.id}`}>
                      <img
                        src={item.image}
                        alt="img"
                        className="img-resposive"
                        style={{ width: "10rem", height: "13rem" }}
                      />
                    </NavLink>
                    <div>
                      <h5>{item.title.slice(0, 15)}</h5>
                      <h5> ${item.price}</h5>
                      <img src={heart} alt="img" />
                    </div>


                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    _products: state._todoProduct
  };
};
function mapDispatchToProps(dispatch) {
  return {
    actFetchProductsRequest: () => dispatch(actFetchProductsRequest()),
    AddCart: (item) => dispatch(AddCart(item))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);
