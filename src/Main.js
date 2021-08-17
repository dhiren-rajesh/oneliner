import React, {useState} from 'react'
import './Main.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Likes from './Likes'


export default function Main() {
    const [textInp, setTextInp] = useState(null);
    // const [like, setLike] = useState(0);
    // const [dislike, setDislike] = useState(0);
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
                    <hr/>
                    {/* <div className="post-footer">
                        <div className="like-counter">{like}</div>
                        <button className="arrow-btn" onClick={() => setLike(like +1)}>
                            <ArrowUpwardIcon className="arrow-btn-up" style={{ fontSize: "2rem"}}/>
                        </button>
                        <button className="arrow-btn" onClick={() => setDislike(dislike +1)}>
                            <ArrowDownwardIcon className="arrow-btn-down" style={{ fontSize: "2rem"}}/>
                        </button>
                        <div className="like-counter">{dislike}</div>
                    </div> */}
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
