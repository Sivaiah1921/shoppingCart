import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddCart } from "../actions";
import './CartDetails.scss'
import heart from "../Assets/heart.svg"
import share from "../Assets/share-2.svg"
import Swatch1 from '../Assets/Swatch 01.png';
import Swatch2 from '../Assets/Swatch 02.png';
import Swatch3 from '../Assets/Swatch 03.png';
import Swatch4 from '../Assets/Swatch 04.png';


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
    <>
      <div className="CartDetails">
        <div className="CartDetails__top">
          <div className="CartDetails__left">
            <img
              src={data?.image}
              alt="img"
              width={500}
              height={600}
              className="img-resposive"
            />
            <div className="CartDetails__itemName">
              <div>Mens Casual Premium Slim Fit T-Shirts </div>
            </div>

          </div>
          <div className="CartDetails__right">
            <h5>{data?.title}</h5>
            <h5> ${data?.price}</h5>
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

              <span className="CartDetails__text__color1"></span>
              <span className="CartDetails__text__color2"></span>
              <span className="CartDetails__text__color3"></span>
              <span className="CartDetails__text__color4"></span>
            </div>
            <div className="CartDetails__size">
              <div>Size</div>
            </div>
            <div className="CartDetails__rectangls">
              <button className="CartDetails__rectangls1">XS</button>
              <button className="CartDetails__rectangls2">S</button>
              <button className="CartDetails__rectangls3">M</button>
              <button className="CartDetails__rectangls4">L</button>
              <button className="CartDetails__rectangls5">XL</button>
            </div>
            <div className="CartDetails__quantity">
              <div>Quantity</div>
              <div>
                <span
                  className={`${quantity === 0 ? "CartDetails__disable" : "CartDetails__span1"}`}
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
              <li className="CartDetails__save">Save</li>
              <img src={share} alt="share" />
              <li className="CartDetails__share">Share</li>
            </div >
          </div>

        </div>
        <div className="CartDetails__description">
          <div className="CartDetails__leftList">
            <h5>Description</h5>
            <p>Slim-fitting style, contrast raglan long sleeve, three-button henley
              placket, light weight & soft fabric for breathable and comfortable
              wearing.</p>
          </div>
          <div className="CartDetails__rightList">
            <h5>Details</h5>
            <div className="CartDetails__rightListItems">
              <div>
                <p className="CartDetails__icons">Sweat-wicking</p>
                <p>Lightweight fabric</p></div>
              <div>
                <p className="CartDetails__icons">Breathable</p>
                <p>69% nylon, 31% lycra</p>
              </div>



            </div>


          </div>
        </div>
        <div className="CartDetails__details__children"> </div>

        {/* //break */}

      </div>


      <div className="cartDetailsMobile">
        <img
          src={data?.image}
          alt="img"
          width={400}
          height={550}
          className="img-resposive"

        />
        <h5>{data?.title}</h5>
        <h5> ${data?.price}</h5>


        <div >
          <a onClick={() => setReadMore(!readMore)}>{linkName}
            {readMore ? 'Read Less ' : 'Read More '}
          </a>
        </div>

        <div className="cartDetailsMobile__border">
          <div></div>
        </div>

        <div className="cartDetailsMobile__text">
          <h5>Color</h5>
        </div>

        <div className="cartDetailsMobile__color">
          <span><img src={Swatch1} /></span>
          <span><img src={Swatch2} /></span>
          <span><img src={Swatch3} /></span>
          <span><img src={Swatch4} /></span>
        </div>
        <div className="cartDetailsMobile__size">
          <h5>Size</h5>
        </div>
        <div className="cartDetailsMobile__rectangls">
          <button className="cartDetailsMobile__rectangls1">XS</button>
          <button className="cartDetailsMobile__rectangls2">S</button>
          <button className="cartDetailsMobile__rectangls3">M</button>
          <button className="cartDetailsMobile__rectangls4">L</button>
          <button className="cartDetailsMobile__rectangls5">XL</button>
        </div>
        <div className="cartDetailsMobile__quantity">
          <h5>Quantity</h5>
          <div>
            <span
              className={`${quantity === 0 ? "CartDetailsMobile__disable" : "CartDetails__span1"}`}
              style={{ margin: "2px" }}
              onClick={() => {
                quantity > 0 && setquantity((prev) => --prev)
              }}
            >
              -
            </span>
            <span className="cartDetailsMobile__span2">{quantity}</span>
            <span
              className="cartDetailsMobile__span3"
              style={{ margin: "2px" }}
              onClick={() => setquantity((prev) => ++prev)}
            >
              +
            </span>
          </div>

        </div>
        <span
          className="cartDetailsMobile__cart"
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(AddCart(data, quantity))}
        >
          ADD TO CART
        </span>
        <div className="cartDetailsMobile__icons">
          <ul>
            {/* <img src={heart} alt="heart" /> */}
            <li><a href="#"><img src={heart} /></a>Save</li>
            {/* <img src={share} alt="share" /> */}
            <li><a href="#"><img src={share} />Share</a></li>
          </ul>
        </div >

        {/* //break */}

        <div className="cartDetailsMobile__itemName">
          <p>Mens Casual Premium Slim Fit T-Shirts </p>
        </div>

        <div className="cartDetailsMobile__description">
          <h5>Description</h5>
        </div>

        <div className="cartDetailsMobile__description__content">
          <p>Slim-fitting style, contrast raglan long sleeve, three-button henley
            placket, light weight & soft fabric for breathable and comfortable
            wearing. And Solid stitched shirts with round neck made for
            durability and a great fit for casual fashion wear and diehard
            baseball fans. The Henley style round neckline includes a three-
            button placket.</p>
        </div>
        <div className="cartDetailsMobile__details">
          <h5>Details</h5>
        </div>

        <span className="cartDetailsMobile__details__children"> </span>


      </div>
    </>


  );
};

export default CartDetails;
