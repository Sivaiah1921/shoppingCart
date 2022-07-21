import React from "react";
import { connect } from "react-redux";
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from "../actions";
import trash from "../Assets/trash-2.svg"
import heart from "../Assets/heart.svg"
import edit from "../Assets/edit-2.svg"
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
    <div className="Cart">
      <div className="Cart__row">
        <div className="Cart__col-md-12">
          <span className="Cart__span">Your Shopping Bag</span>

          <div className="Cart__span__children"> </div>

          <table className="Cart__table">
            <thead></thead>
            <tbody>
              {ListCart.map((item, key) => {
                return (
                  <tr key={key}>
                    <td>
                      <i
                        className="Cart__badge__badge__danger"
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
                    <td>{item.price} $</td>
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
              })}
              <tr>
                <td colSpan="5">Total Carts</td>
                <td>{Number(TotalCart).toLocaleString("en-US")} $</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  //  console.log(state)
  return {
    items: state._todoProduct
  };
};

export default connect(mapStateToProps, {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart
})(Cart);
