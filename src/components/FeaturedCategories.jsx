import React from 'react'
import low from "../Images/category-low.png"
import high from "../Images/category-high.png"
import jordan from "../Images/air-jordan.jpg"
import "../styles/FeaturedCategories.css"
const FeaturedCategories = () => {
  return (
    <div className="Categories">
        <h2 className='content'> Categories to Choose From...</h2>
        <div className="small-container">
            <div className="row">
                <div className="col-3">
                    <p className='img-tag'>Air Max Low</p>
                <img src={low}></img>
                </div>
                <div className="col-3">
                <p className='img-tag'>Air Max High</p>
                <img src={high}></img>
                </div>
                <div className="col-3">
                <p className='img-tag'>Air Jordan</p>
                <img src={jordan}></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedCategories