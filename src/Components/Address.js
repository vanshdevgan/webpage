import React from 'react'
import './Address.css'
export default function Address() {
  return (
    <div className="address">
        <div className="address_img">
            <img src={require("../component-style/images/2.PNG")} alt="" />
        </div>
        <div className="address_text">
            <div className="physical">
                <h1>Want More Information? <br />
                Contact Us <br /></h1>
                <h3>
                    Connection Media LLP <br />
                    A-177, Gali no-22 <br />
                    Chhatarpur Enclave Phase-2 <br />
                    Delhi-110074 <br />
                    8178658855/011-49957421
                </h3>
            </div>
            <div className="social">
                <div className="socialM fb"></div>
                <div className="socialM ins"></div>
                <div className="socialM yt"></div>
                <div className="socialM tw"></div>


            </div>
        </div>
    </div>
  )
}
