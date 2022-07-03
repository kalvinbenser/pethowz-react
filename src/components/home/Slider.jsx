import React from 'react'
import Slide1 from '../../assets/images/slider1.png'
import Slide2 from '../../assets/images/slider2.png'
import Slide3 from '../../assets/images/slider3.jpg'

const Slider = () => {
  return (
    <div class="carousel w-full h-[400px]">
  <div id="slide1" class="carousel-item relative w-full">
    <img src={Slide1} class="w-full" alt="img" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src={Slide2} class="w-full" alt="img"/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src={Slide3} class="w-full" alt="img"/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div> 
 
</div>
  )
}

export default Slider