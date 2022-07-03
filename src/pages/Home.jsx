import React from 'react'

import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'
import Banner from '../components/home/Banner'
import Exclusive from '../components/home/Exclusive'
import Provider from '../components/home/Provider'
import Slider from '../components/home/Slider'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Slider/>
     {/* Exclusive Pet Spaces */}

     <Exclusive/>
     <Provider/>
     <Exclusive/>
      <Banner/>
    <Footer/>
    </>
  )
}

export default Home