//     <div className="CartDetails__mobile">
//       <img
//         src={data?.image}
//         alt="img"
//         className="img-resposive"
    
//       />
//       <h5>{data?.title}</h5>
//       <h5> ${data?.price}</h5>
            
     
//       <div >
//         <a onClick={() => setReadMore(!readMore)}>{linkName}
//           {readMore ? 'Read Less ' : 'Read More '}
//         </a>
//       </div>

//       <div className="cartDetails__border">
//         <div></div>
//       </div>

//       <div className="CartDetails__text">
//         <div>Color</div>
//       </div>

//       <div className="CartDetails__text__color">

//         <div className="CartDetails__text__color1"></div>
//         <div className="CartDetails__text__color2"></div>
//         <div className="CartDetails__text__color3"></div>
//         <div className="CartDetails__text__color4"></div>
//       </div>
//       <div className="CartDetails__size">
//         <div>Size</div>
//       </div>
//       <div className="CartDetails__rectangls">
//         <div className="CartDetails__rectangls1">XS</div>
//         <div className="CartDetails__rectangls2">S</div>
//         <div className="CartDetails__rectangls3">M</div>
//         <div className="CartDetails__rectangls4">L</div>
//         <div className="CartDetails__rectangls5">XL</div>
//       </div>
//       <div className="CartDetails__quantity">
//         <div>Quantity</div>
//         <div>
//           <span
//             className={`${quantity === 0 ? "CartDetails__disable" : "CartDetails__span1"}`}        
//             style={{ margin: "2px" }}
//             onClick={() => {
//               quantity > 0 && setquantity((prev) => --prev)
//             }}
//           >
//             -
//           </span>
//           <span className="CartDetails__span2">{quantity}</span>
//           <span
//             className="CartDetails__span3"
//             style={{ margin: "2px" }}
//             onClick={() => setquantity((prev) => ++prev)}
//           >
//             +
//           </span>
//         </div>

//       </div>
//       <span
//         className="CartDetails__cart"
//         style={{ cursor: "pointer" }}
//         onClick={() => dispatch(AddCart(data, quantity))}
//       >
//         ADD TO CART
//       </span>
//       <div className="CartDetails__icons">
//         <img src={heart} alt="heart" />
//         <div className="CartDetails__save">Save</div>
//         <img src={share} alt="share" />
//         <div className="CartDetails__share">Share</div>
//       </div >

// {/* //break */}
              
//       <div className="CartDetails__itemName">
//         <div>Mens Casual Premium Slim Fit T-Shirts </div>
//       </div>

//       <div className="CartDetails__description">
//         <div>Description</div>
//       </div>

//       <div className="CartDetails__description__content">
//           <p>Slim-fitting style, contrast raglan long sleeve, three-button henley
//              placket, light weight & soft fabric for breathable and comfortable
//              wearing. And Solid stitched shirts with round neck made for
//              durability and a great fit for casual fashion wear and diehard
//              baseball fans. The Henley style round neckline includes a three-
//              button placket.</p>
//       </div>
//       <div className="CartDetails__details">
//         <div>Details</div>
//       </div>

//       <div className="CartDetails__details__children"> </div>


//     </div>