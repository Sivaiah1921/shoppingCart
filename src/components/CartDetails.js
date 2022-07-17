import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddCart } from "../actions";
import './CartDetails.scss'
import heart from "../Assets/heart.svg"
import share from "../Assets/share-2.svg"


const CartDetails = () => {
  const [data, setData] = useState();
  const [quantity, setquantity] = useState(0);
  const [readMore, setReadMore] = useState(false)
  const { id } = useParams();

  const linkName = readMore ? data?.description : data?.description.slice(0, 76)

  const dispatch = useDispatch();
  useEffect(() => {
    getProductDetails(id);
  }, []);
  const getProductDetails = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  };
  console.log(data, "getProfuctDetails");
  return (
    <div className="CartDetails">
      <img
        src={data?.image}
        alt="img"
        className="img-resposive"
      // style={{ width: "50%", height: "500px" }}
      />
      <h5>{data?.title}</h5>
      <h5> ${data?.price}</h5>
      {/*       
      className="CartDetails__underline" */}
      <div >
        <a onClick={() => setReadMore(!readMore)}>{linkName}
          {readMore ? 'Read Less ' : 'Read More '}
        </a>
      </div>

      <div className="cartDetails__border">
        <div></div>
      </div>

      <div className="CartDetails__text">
        <div>Color</div>
      </div>

      <div className="CartDetails__text__color">

        <div className="CartDetails__text__color1"></div>
        <div className="CartDetails__text__color2"></div>
        <div className="CartDetails__text__color3"></div>
        <div className="CartDetails__text__color4"></div>
      </div>
      <div className="CartDetails__size">
        <div>Size</div>
      </div>
      <div className="CartDetails__rectangls">
        <div className="CartDetails__rectangls1">XS</div>
        <div className="CartDetails__rectangls2">S</div>
        <div className="CartDetails__rectangls3">M</div>
        <div className="CartDetails__rectangls4">L</div>
        <div className="CartDetails__rectangls5">XL</div>
      </div>
      <div className="CartDetails__quantity">
        <div>Quantity</div>
        <div>
          <span
            className={`${quantity === 0 ? "CartDetails__disable" : "CartDetails__span1"}`}        //"CartDetails__span1"
            style={{ margin: "2px" }}
            onClick={() => {
              quantity > 0 && setquantity((prev) => --prev)
            }}
          >
            -
          </span>
          <span className="CartDetails__span2">{quantity}</span>
          <span
            className="CartDetails__span3"
            style={{ margin: "2px" }}
            onClick={() => setquantity((prev) => ++prev)}
          >
            +
          </span>
        </div>

      </div>
      <span
        className="CartDetails__cart"
        style={{ cursor: "pointer" }}
        onClick={() => dispatch(AddCart(data, quantity))}
      >
        ADD TO CART
      </span>
      <div className="CartDetails__icons">
        <img src={heart} alt="heart" />
        <div className="CartDetails__save">Save</div>
        <img src={share} alt="share" />
        <div className="CartDetails__share">Share</div>
      </div >

      <div className="CartDetails__itemName">
        <div>Mens Casual Premium Slim Fit T-Shirts </div>
      </div>

      <div className="CartDetails__description">
        <div>Description</div>
      </div>

      <div className="CartDetails__description__content">
        <div>Slim-fitting style, contrast raglan long sleeve, three-button henley</div>
        <div>placket, light weight & soft fabric for breathable and comfortable</div>
        <div>wearing. And Solid stitched shirts with round neck made for</div>
        <div>durability and a great fit for casual fashion wear and diehard</div>
        <div>baseball fans. The Henley style round neckline includes a three-</div>
        <div>button placket.</div>
      </div>
      <div className="CartDetails__details">
        <div>Details</div>
      </div>

      <div className="CartDetails__details__children"> </div>


    </div>
  );
};

export default CartDetails;
