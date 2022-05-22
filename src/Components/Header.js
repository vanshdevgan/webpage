import React from 'react'
import './Header.css'
export default function Header() {
    return (
        <div className="header">
            <div className="g_play_logo">
                <a href="https://play.google.com/store/apps/details?id=com.innovatia">
                <img src={require("../component-style/images/1c1d7b600b3d15d0a279c6e3acee7060.png")} alt="" />
                </a>
            </div>
            <div className="conn_logo">
                <img src={require("../component-style/images/72b9b73ccab30eed6ae2fc110f23aa8c.png")} alt="" />
            </div>
        </div>
    )
}
