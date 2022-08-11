import React from 'react'
import "./Home.scss"

const Home = () => {
  return (
    <>
      <div className='home'>
        <div className='home__header'>
          <div className='home__left'>
           <p>Shop the new 
            Signature Collection
           </p>
           <p>discription</p>
           <button>SHOP NOW</button>
          </div>
          <div className='home__right'>
            <span>Mens</span>
          </div>
        </div>

        <div className='home__middle'>
          <span>Shop Women</span>
          <p>Lorem ipum dolor sit omet</p>
          <span>Shop Men</span>
          <p>Lorem ipum dolor sit omet</p>
          <span>Jewellery</span>
          <p>Lorem ipum dolor sit omet</p>
          <span>Electronics</span>
          <p>Lorem ipum dolor sit omet</p>
        </div>
        <div className='home__body'>
          <div>
            <p>Take off in the new
              SignatureLegging
            </p>
            <p>Lorem ipsum Dolor Tempor</p>
            <p>Description</p>
            <button>SHOP COLLECTION</button>
            <button>SHOP NOW</button>
            <span>MTblue</span>
          </div>
          <div>Mens image</div>
        </div>
        <div className='home__footer'>
          <div>
            Mens Left
          </div>
          <div>
            <p>Conquer your
              next adventure
            </p>
            <p>Lorem ipsum Dolor Tempor</p>
            <button>SHOP DEVICES</button>
            <span>Mtimageblue</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
