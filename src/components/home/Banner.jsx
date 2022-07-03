import React from 'react'
import BannerImg from '../../assets/images/banner.png';

const Banner = () => {
  return (
    <div className="px-2 my-4 relative">
      <img src={BannerImg} alt="Banner"/>
    
      <h2 className="text-xl absolute bottom-0 left-0">List your space or pets and start earning</h2>
      <a  className="text-white">become a Pethost</a>
     
    </div>
  )
}

export default Banner