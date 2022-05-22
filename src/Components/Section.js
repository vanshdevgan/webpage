import React from 'react'
import './Section.css'
export default function Section() {
  return (
    <div className="section">
        <div className="center-img">
        <img src={require("../component-style/images/Centre2.png")} alt="" />

        </div>
        <div className="right-img">
        <img src={require("../component-style/images/connectionn.PNG")} alt="" />
        </div>
    </div>
  )
}
