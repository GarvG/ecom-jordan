import React from 'react'
import cover from "../Images/Coverpic.jpg"
import "../styles/Coverpage.css"
const CoverPic = () => {
  return (
    <div className="row">
        <div className="col-2 cover-content">
        <h1>Get Yourself A New Jod<br></br>
            Pairs Of Beast
         </h1>
        <p>Its not about the Shoes, It is what you do in them</p>
        </div>
        <div className="col-2">
            <img src={cover}></img>
        </div>
    </div>
  )
}

export default CoverPic