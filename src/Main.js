import React, {useState, useRef} from 'react'
import './Main.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Likes from './Likes'
import InputField from './Input'


export default function Main() {

    const inpText = useRef(null);
    const [textInp, setTextInp] = useState();

    const handleClickEvent = () => {
      const post = inpText.current;
      setTextInp(post['post'].value);
      //console.log(textInp);
    };

    const postText = () => {
        if(textInp != null){
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
                <form autoComplete="off" ref={inpText}>
                    <InputField post={'post'} />
                </form>
                <button className="post-btn" onClick={handleClickEvent}>POST</button>
            </div>
            <div>
                {postText()}
            </div>
        </div>
    )
}
