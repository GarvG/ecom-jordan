import React from 'react'
import CoverPic from '../components/CoverPic'
import FeaturedCategories from '../components/FeaturedCategories'
import Navbar from '../components/Navbar'
import "../styles/Homepage.css"

const Homepage = () => {
  return (
    <>
      <div className="Cover-wrapper">

      
      <div className="home-container">
          <Navbar/>
      <CoverPic/>
      
       </div>
      </div>
      <FeaturedCategories/>
      </>

  )
}

export default Homepage