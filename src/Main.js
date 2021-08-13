import React from 'react'
import './Main.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


export default function Main() {
    return (
        <div className="main">
            <div className="post">
                <AccountCircleIcon style={{ fontSize: "3rem"}}/>
                <input className="text-inp" placeholder="What's on your mind??"/>
                <button className="post-btn">POST</button>
            </div>
        </div>
    )
}
