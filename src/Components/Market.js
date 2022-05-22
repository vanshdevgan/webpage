import React from 'react'
import './Market.css'
export default function Market() {
  return (
    <div className="market" id="market">
        <div className="market-text">
            <h2>Market Place: Specially Crafter to <br />
            SELL, BUY OR RENT <br />
            Any Media Equipments. <br /> <br />
            <span style={{color: '#ff7f50'}}>FREE POST AND FREE CONNECTION</span> </h2>
        </div>
        <div className="market_img">
            <img src={require("../component-style/images/1.PNG")} alt="" />
        </div>
    </div>
  )
}
