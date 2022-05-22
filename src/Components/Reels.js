import React from 'react'
import './Reels.css'
export default function Reels() {
  return (
    <div className="reel-showcase">
        <div className="reel-show_text" id="reel">
            <h3>Reel Showcase - Showcase your talent to the world in our Explore 
            One can easily connect and comment</h3> 
        </div>
        <div className="reel-img">
            <img src={require("../component-style/images/reel.png")} alt="" />
        </div>
    </div>
  )
}
