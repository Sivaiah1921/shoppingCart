import React from "react";
import { connect } from "react-redux";
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from "../actions";
import { Link } from "react-router-dom";
import trash from "../Assets/trash-2.svg"
import heart from "../Assets/heart.svg"
import edit from "../Assets/edit-2.svg"
import PPBTN from "../Assets/PP_BTN.png"
import Accordion from "./Accordion/Accordion";
import "./Cart.scss"

export const Cart = ({ items, IncreaseQuantity, DecreaseQuantity, DeleteCart }) => {

  let ListCart = [];
  let TotalCart
  Object.keys(items.Carts).forEach(function (item) {
    TotalCart += items.Carts[item].quantity * items.Carts[item].price;
    ListCart.push(items.Carts[item]);
  });
  function TotalPrice(price, tonggia) {
    return Number(price * tonggia).toLocaleString("en-US");
  }

  return (
    <>
      <div className="cart">
        <div className="cart__row">
          <div className="cart__col-md-12">
            <span className="cart__span">Your Shopping Bag</span>

            <div className="cart__span__children"> </div>

            <table className="cart__table">
              <div className="cart__tableChild">
                <tbody>
                  {ListCart.length === 0 ? (<h1>Your cart is Empty </h1>) : (
                    ListCart.map((item, key) => {
                      return (
                        <tr key={key}>
                          <td>{item.name}</td>
                          <td>
                            <img
                              src={item.image}
                              alt="img"
                              style={{
                                width: "200px", height: "150px",
                              }}
                            />
                          </td>
                          <div className="cart__desktop">
                            <span className="cart__details">
                              <h5>{item.title}</h5>
                              <p className="cart__medium">Size:Medium</p>
                              <p className="cart__storm">Color:Storm</p>
                              <p className="cart__price">Price: ${item.price}</p>
                            </span>
                          </div>
                          <td>
                            <div className="cart__button">
                              <span
                                className="cart__increse"
                                style={{ margin: "2px" }}
                                onClick={() => DecreaseQuantity(key)}
                              >
                                -
                              </span>
                              <span className="cart__info">{item.quantity}</span>
                              <span
                                className="cart__dicrese"
                                style={{ margin: "2px" }}
                                onClick={() => IncreaseQuantity(key)}
                              >
                                +
                              </span>
                            </div>
                          </td>
                          <td>
                            <i
                              className="cart__badge"
                              onClick={() => DeleteCart(key)}
                            >
                              <p><img src={edit} />Edit Item</p>
                              <p><img src={trash} />Remove</p>
                              <p><img src={heart} />Save for later</p>
                            </i>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
                <div className="cart__accordion">
                  <Accordion />
                </div>
              </div>

              {ListCart.length > 0 && (
                <div className="cart__payList">
                  <h4>Pricing Summery</h4>
                  <div className="cart__pricetag">
                    <p>Price</p>
                    <p>-$0</p>
                  </div>
                  <div className="cart__coupontag">
                    <p>Coupon</p>
                    <p>-$0</p>
                  </div>
                  <div className="cart__giftcardtag">
                    <p>Giftcard</p>
                    <p>-$0</p>
                  </div>
                  <div className="cart__rightTaxtag">
                    <p>Estimated tax</p>
                    <p>89$</p>
                  </div>
                  <div className="cart__rightShiptag">
                    <p>Estimated shipping:</p>
                    <p>6$</p>
                  </div>
                  <div className="cart__rightTotaltag">
                    <p>Estimated Total:</p>
                    <p>69$</p>
                  </div>
                  <button onClick={() => alert('under maintance')} className="cart__checkbtn"><i className="fa fa-lock"></i>Checkout</button>
                  <Link to="#"><img src={PPBTN} alt="paypal" /></Link>
                </div>
              )}
            </table>

          </div>
        </div>
      </div>

      {/* <Break /> */}

      <div className="cartMobile">
        <div className="cartMobile__row">
          <div className="cartMobile__col-md-12">
            <span className="cartMobile__span">Your Shopping Bag</span>

            <div className="cartMobile__spanChildren"> </div>

            <table className="cartMobile__table">

              <tbody>
                {ListCart.length === 0 ? ('') : (
                  ListCart.map((item, key) => {
                    return (
                      <div key={key}>
                        <div className="cartMobile__content">
                          <div className="cartMobile__imageLeft">
                            <img
                              src={item.image}
                              alt="img"
                              style={{ width: "120px", height: "90px" }}
                            />
                          </div>
                          <div className="cartMobile__imageRight">
                            <span className="cartMobile__details">
                              <h5>{item.title}</h5>
                              <p>Size:Medium</p>
                              <p>Color:Storm</p>
                              <p className="cartMobile__price">Price: ${item.price}</p>
                              <div>...</div>
                            </span>
                             
                            <div>
                              <span
                                className="cartMobile__dicrease"
                                style={{ margin: "2px" }}
                                onClick={() => DecreaseQuantity(key)}
                              >
                                -
                              </span>
                              <span className="cartMobile__quantity">{item.quantity}</span>
                              <span
                                className="cartMobile__increase"
                                style={{ margin: "2px" }}
                                onClick={() => IncreaseQuantity(key)}
                              >
                                +
                              </span>
                            </div>
                          </div>
                        </div>
                        <Accordion />
                      </div>
                    );
                  })
                )}
              </tbody>

              {ListCart.length > 0 && (
                <div className="cartMobile__payList">
                  <h4>Pricing Summery</h4>
                  <div className="cartMobile__price">
                    <p>Price</p>
                    <p>-$0</p>
                  </div>
                  <div className="cartMobile__coupontag">
                    <p>Coupon</p>
                    <p>-$0</p>
                  </div>
                  <div className="cartMobile__giftcardtag">
                    <p>Giftcard</p>
                    <p>-$0</p>
                  </div>
                  <div className="cartMobile__rightTaxtag">
                    <p>Estimated tax</p>
                    <p>-$90</p>
                  </div>
                  <div className="cartMobile__rightShiptag">
                    <p>Estimated shipping</p>
                    <p>FREE</p>
                  </div>
                  <div className="cartMobile__rightTotaltag">
                    <p>Estimated Total: </p>
                     <p>$48 </p>
                  </div>
                  <div className="cartMobile__payment">
                  <button onClick={() => alert('under maintance')} ><i className="fa fa-lock"></i>Checkout</button>
                  <Link to="#"><img src={PPBTN} alt="paypal" /></Link>
                  </div>
                </div>
              )}
            </table>

          </div>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {

  return {
    items: state._todoProduct
  };
};

export default connect(mapStateToProps, {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart
})(Cart);
