import React from 'react'
import './About.css'
export default function About() {
  return (
    <div className="about" id="easy-apply">
        <div className="about-text">
            <h2>
            <span style={{color: 'blue'}}>Connection - </span> India's 1st <br />
            Media & Entertainment Industry <br />
            Job and Social Media Platform
            </h2>
        </div>
        <div className="about-image">
            <img src={require("../component-style/images/big.png")} alt="" />

        </div>
    </div>
  )
}
