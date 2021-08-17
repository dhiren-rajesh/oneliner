import React, {useState} from 'react'
import './Main.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Likes from './Likes'


export default function Main() {
    const [textInp, setTextInp] = useState(null);
    const [flag, setFlag] = useState(false);
    const submitValue = () => {
        if(textInp != null){
            console.log(textInp);
            setFlag(true);
        }
        else{
            console.log("Text Field is Empty");
        }
    }

    const postText = () => {
        if(flag){
            return(
                <div className="main-post">
                    <div className="post-header">
                        <AccountCircleIcon style={{ fontSize: "3rem"}}/>
                        <h2>Anonymous</h2>
                    </div>
                    <div className="post-content">
                        {textInp}
                    </div>
                    <div>
                        <Likes/>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="main">
            <div className="post">
                <AccountCircleIcon style={{ fontSize: "3rem"}}/>
                <input type="text" className="text-inp" 
                onChange={e => setTextInp(e.target.value)} 
                placeholder="What's on your mind??"/>
                <button type="submit" className="post-btn" onClick={submitValue}>POST</button>
            </div>
            <div>
                {postText()}
            </div>
        </div>
    )
}
