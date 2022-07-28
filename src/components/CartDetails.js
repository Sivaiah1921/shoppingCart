import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddCart } from "../actions";
import './CartDetails.scss'
import heart from "../Assets/heart.svg"
import share from "../Assets/share-2.svg"
import Swatch1 from '../Assets/Swatch 01.png';
import Swatch2 from '../Assets/Swatch 02.png';
import Swatch3 from '../Assets/Swatch 03.png';
import Swatch4 from '../Assets/Swatch 04.png';
import { GiTreeBranch } from "react-icons/gi";
import { WiHot } from "react-icons/wi";
import { GiLindenLeaf } from "react-icons/gi";
import { HiDocumentDuplicate } from "react-icons/hi";


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
      <div className="cartDetails">
        <div className="cartDetails__top">
          <div className="cartDetails__left">
            <img
              src={data?.image}
              alt="img"
              width={500}
              height={600}
              className="img-resposive"
            />
            <div className="cartDetails__itemName">
              <div>Mens Casual Premium Slim Fit T-Shirts </div>
            </div>

          </div>
          <div className="cartDetails__right">
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
            <div className="cartDetails__text">
              <div>Color</div>
            </div>
            <div className="cartDetails__color">

              <span><img src={Swatch1} alt="switch1"/></span>
              <span ><img src={Swatch2} alt="switch2"/></span>
              <span ><img src={Swatch3}alt="switch3" /></span>
              <span ><img src={Swatch4}alt="switch4" /></span>
            </div>
            <div className="cartDetails__size">
              <div>Size</div>
            </div>
            <div className="cartDetails__button">
              <button >XS</button>
              <button >S</button>
              <button >M</button>
              <button >L</button>
              <button >XL</button>
            </div>
            <div className="cartDetails__quantity">
              <div>Quantity</div>
              <div>
                <span
                  className={`${quantity === 0 ? "cartDetails__disable" : "cartDetails__span1"}`}
                  style={{ margin: "2px" }}
                  onClick={() => {
                    quantity > 0 && setquantity((prev) => --prev)
                  }}
                >
                  -
                </span>
                <span className="cartDetails__span2">{quantity}</span>
                <span
                  className="cartDetails__span3"
                  style={{ margin: "2px" }}
                  onClick={() => setquantity((prev) => ++prev)}
                >
                  +
                </span>
              </div>

            </div>
            <span
              className="cartDetails__cart"
              style={{ cursor: "pointer" }}
              onClick={() => dispatch(AddCart(data, quantity))}
            >
              ADD TO CART
            </span>
            <div className="cartDetails__icons">
              <img src={heart} alt="heart" />
              <li className="cartDetails__save">Save</li>
              <img src={share} alt="share" />
              <li className="cartDetails__share">Share</li>
            </div >
          </div>

        </div>
        <div className="cartDetails__description">
          <div className="cartDetails__leftList">
            <h5>Description</h5>
            <p>Slim-fitting style, contrast raglan long sleeve, three-button henley
              placket, light weight & soft fabric for breathable and comfortable
              wearing.</p>
          </div>
          <div className="cartDetails__rightList">
            <h5>Details</h5>
            <div className="cartDetails__rightListItems">
              <div className="cartDetails__iconsItem1">
                <p> <GiTreeBranch  />Sweat-wicking</p>
                <p><GiLindenLeaf /> Lightweight fabric</p></div>
              <div className="cartDetails__iconsItem2">
                <p ><WiHot />Breathable</p>
                <p> <HiDocumentDuplicate />69% nylon, 31% lycra</p>
              </div>

            </div>


          </div>
        </div>
        <div className="cartDetails__children"> </div>

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
          <span><img src={Swatch1} alt="switch1" /></span>
          <span><img src={Swatch2} alt="switch2" /></span>
          <span><img src={Swatch3} alt="switch3" /></span>
          <span><img src={Swatch4} alt="switch4" /></span>
        </div>
        <div className="cartDetailsMobile__size">
          <h5>Size</h5>
        </div>
        <div className="cartDetailsMobile__button">
          <button >XS</button>
          <button >S</button>
          <button >M</button>
          <button >L</button>
          <button >XL</button>
        </div>
        <div className="cartDetailsMobile__quantity">
          <h5>Quantity</h5>
          <div className="cartDetailsMobile__quantityMobile">
            <span
              className={`${quantity === 0 ? "cartDetailsMobile__disable" : "cartDetailsMobile__span1"}`}
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
            
            <li><a href="#"><img src={heart} alt="heart" /></a>Save</li>
           
            <li><a href="#"><img src={share} alt="share" />Share</a></li>
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
          <div className="cartDetailsMobile__iconsItem">
           <p><GiTreeBranch  />Sweat-wicking</p>
           <p><GiLindenLeaf /> Lightweight fabric</p>
          </div>
          <div className="cartDetailsMobile__iconsItem">
          <p ><WiHot />Breathable</p>
          <p> <HiDocumentDuplicate />69% nylon, 31% lycra</p>
          </div>
       

        <span className="cartDetailsMobile__details__children"> </span>


      </div>
    </>


  );
};

export default CartDetails;
