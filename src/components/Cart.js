import React from "react";
import { connect } from "react-redux";
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from "../actions";
import trash from "../Assets/trash-2.svg"
import heart from "../Assets/heart.svg"
import edit from "../Assets/edit-2.svg"
import Accordion from "./Accordion/Accordion";
import "./Cart.scss"

export const Cart = ({ items, IncreaseQuantity, DecreaseQuantity, DeleteCart }) => {

  let ListCart = [];
  let TotalCart = 0;
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
                        <>

                        </>
                      </tr>
                    );
                  })
                )}
              </tbody>
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
                    <p>Estimated shipping</p>
                    <p>6$</p>
                  </div>
                  <div className="cart__rightTotaltag">
                    <p><b>Estimated Total: </b></p>
                    <p><b>48 $</b></p>
                  </div>
                </div>
              )}
            </table>
            <Accordion />
          </div>
        </div>
      </div>

      {/* <Break /> */}

      <div className="cartMobile">
        <div className="cartMobile__row">
          <div className="cartMobile__col-md-12">
            <span className="cartMobile__span">Your Shopping Bag</span>

            <div className="cartMobile__span__children"> </div>

            <table className="cartMobile__table">
              <thead></thead>
              <tbody>
                {ListCart.length === 0 ? (<h1>Your cart is Empty </h1>) : (
                  ListCart.map((item, key) => {
                    return (
                      <tr key={key}>
                        <td>
                          <i
                            className="cartMobile__badge__badge__danger"
                            onClick={() => DeleteCart(key)}
                          >
                            <img src={edit} alt="edit" />   Edit Item
                            <img src={trash} alt="trash" /> Remove
                            <img src={heart} alt="heart" />   Save for Later
                          </i>
                        </td>
                        <td>{item.name}</td>
                        <td>
                          <img
                            src={item.image}
                            alt="img"
                            style={{ width: "100px", height: "80px" }}
                          />
                        </td>
                        <div className="cartMobile__mobile">
                          <span className="cartMobile__details">
                            <h5>{item.title}</h5>
                            <p>Size:Medium</p>
                            <p>Color:Storm</p>
                            <p className="cartMobile__price">Price: ${item.price}</p>
                          </span>
                        </div>
                        <td>
                          <span
                            className="btn btn-primary"
                            style={{ margin: "2px" }}
                            onClick={() => DecreaseQuantity(key)}
                          >
                            -
                          </span>
                          <span className="btn btn-info">{item.quantity}</span>
                          <span
                            className="btn btn-primary"
                            style={{ margin: "2px" }}
                            onClick={() => IncreaseQuantity(key)}
                          >
                            +
                          </span>
                        </td>
                        <td>{TotalPrice(item.price, item.quantity)} $</td>
                      </tr>
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
                    {/* <p>${taxPrice.toFixed(2)}</p> */}
                  </div>
                  <div className="cartMobile__rightShiptag">
                    <p>Estimated shipping</p>
                    {/* <p>${shippingPrice.toFixed(2)}</p> */}
                  </div>
                  <div className="cartMobile__rightTotaltag">
                    <p>Estimated Total: 48 $</p>
                    <p>67$</p>
                  </div>
                </div>
              )}
            </table>
            <Accordion />
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
