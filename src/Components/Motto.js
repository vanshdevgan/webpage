import React from 'react'
import "./Motto.css"
export default function Motto() {
    return (
        <div className="motto">
            <div className="left">
                <div className="C">
                    <img src={require("../component-style/images/C.png")} alt="" />
                </div>
                <div className="connect_para">
                    <h1>Connect With Your <br />
                        Perfect Job Match</h1>
                </div>
                <div className="scan_and_download">
                    <h2>
                        Scan and Download <br />
                        <span style={{ color: 'white' }}>Connection App</span>
                    </h2>
                </div>
                <div className="qr">
                    <img src={require("../component-style/images/qr.png")} alt="" />

                </div>
                <div className="open">
                    <h3>Open The <span style={{ color: 'white' }}>Camera</span> on your phone <br /> and Scan the <span style={{ color: 'white' }}>QR Code</span></h3>
                </div>
            </div>
            <div className="right">
                <div className="message">
                    <img src={require("../component-style/images/z-message.png")} alt="" />
                </div>
                <div className="human">
                    <img src={require("../component-style/images/human.png")} alt="" />
                </div>
                <div className="rocket"></div>
                <div className="background">
                    <div className="bck-1">
                        <img src={require("../component-style/images/z-bck-1.png")} alt="" />
                    </div>
                    <div className="bck-2">
                        <img src={require("../component-style/images/z-bck-2.png")} alt="" />

                    </div>
                    <div className="bck-3">
                        <img src={require("../component-style/images/z-bck-3.png")} alt="" />

                    </div>
                    <div className="mobile">
                    <div className="mob-1">
                        <img src={require("../component-style/images/mob-1.png")} alt="" />

                    </div>
                    <div className="mob-2">
                        <img src={require("../component-style/images/mob-2.png")} alt="" />

                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
