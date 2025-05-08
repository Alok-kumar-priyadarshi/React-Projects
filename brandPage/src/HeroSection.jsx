import React from 'react'
import hero_img  from "./assets/hero-image.png";
import amazon  from "./assets/amazon.png";
import flipkart  from "./assets/flipkart.png";

const HeroSection = () => {
  return (
    <div>
        <div className='main'>

            <div className='left'>
            
            <h1 className='first'>
                YOUR FEET DESERVE THE BEST
            </h1>

            <p className='second'>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            </p>

            <div className='buttons'>
                <button className='shop-btn'>
                Shop Now
                </button>
                <button className='cat-btn'>
                Category
                </button>

            </div>

            

            <p className='third'>Also Available On</p>

            <div className='images'>

                <img src={flipkart} alt="" />
                <img src={amazon} alt="" />
            </div>


            </div>

            <div className='right'>
            <img src={hero_img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default HeroSection