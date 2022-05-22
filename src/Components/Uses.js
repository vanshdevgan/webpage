import React from 'react'
import "./Uses.css"
export default function Uses() {
    return (
        <div className="uses">
            <div className="uses-text">
                <h1>Create your own <span style={{ color: 'blue' }}>connection</span>  <br />
                    Instantly and Directly</h1>
            </div>
            <div className="uses-img">
                <img src={require("../component-style/images/uses.png")} alt="" />
            </div>
            <div className="ways-to-apply">
                <div className="chair">
                    <div className="chair_img">
                        <img src={require("../component-style/images/z-chair.PNG")} alt="" />
                    </div>
                    <div className="chair_text">
                        Post a job and apply for FREE
                    </div>
                </div>


                <div className="user">
                    <div className="user_img">
                        <img src={require("../component-style/images/z-apply.png")} alt="" />
                    </div>
                    <div className="user_text">
                        Apply in just 3 Clicks
                    </div>
                </div>


                <div className="message2">
                    <div className="message_img">
                        <img src={require("../component-style/images/z2-message.PNG")} alt="" />
                    </div>
                    <div className="message_text">
                        Connect and Chat instantly
                    </div>
                </div>
            </div>
        </div>
    )
}
