import React, {useEffect } from "react";
import { actFetchProductsRequest, AddCart } from "../actions";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import heart from "../Assets/heart.svg";
import sliders from "../Assets/sliders.svg"
import arrowdown from "../Assets/arrow-up.svg"
import arrowup from "../Assets/arrow-down.svg"
import './Product.scss'


const WomenListing = (props) =>{
    
  const {_products} = props._products
  const filterWomens = _products.filter((value) => value.category === "women's clothing");
  console.log(filterWomens, "_products");

  useEffect(() =>{
     props.actFetchProductsRequest();
  },[props])
 
  return (
    <div style={{ marginTop: "10px" }}>
      <div className="product">
        <div className="product__banner">
          <div>
            <div>Women's</div>
           
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

            <label style={{ display: 'flex', gap: "10px" }}><input type='checkbox' /> Option</label>
            <label style={{ display: 'flex', gap: "10px" }}><input type='checkbox' /> Option</label>
            <label style={{ display: 'flex', gap: "10px" }}><input type='checkbox' /> Option</label>
            <label style={{ display: 'flex', gap: "10px" }} ><input type='checkbox' /> Option</label>
            <label style={{ display: 'flex', gap: "10px" }}><input type='checkbox' /> Option</label>

            <div className="product__sidebar__showmore">
              <a href="#">Show more</a>
            </div>

            <div className="product__sidebar__attribute2">Attribute</div>
            <label><input type='checkbox' /> Option</label>
            <label><input type='checkbox' /> Option</label>
            <label><input type='checkbox' /> Option</label>
            <label><input type='checkbox' /> Option</label>
            <label><input type='checkbox' /> Option</label>
            <label><input type='checkbox' /> Option</label>

            <div className="product__sidebar__attribute3">Attribute</div>

            <label><input type='checkbox' /> Option</label>
            <label><input type='checkbox' /> Option</label>
            <label><input type='checkbox' /> Option</label>
            <label><input type='checkbox' /> Option</label>
            <label><input type='checkbox' /> Option</label>
            <label><input type='checkbox' /> Option</label>
           
          </div>

          <div className="product__listingItems">
            {filterWomens.length === 0 ? (
              <div className="product__listingItems">
                <h2>Loading...!</h2>
              </div>
            ) : (
                filterWomens.map((item, index) => (
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
export default connect(mapStateToProps, mapDispatchToProps)(WomenListing);
