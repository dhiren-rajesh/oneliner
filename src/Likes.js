import {React, useState} from 'react'
import './Likes.css'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export default function Likes() {

const [likes, setLikes] = useState(0);
const [dislikes, setDislikes] = useState(0);
const [active, setActive] = useState(null);

const changeLike = () => {
  if(active === "dislike"){
    setDislikes(dislikes - 1)
    setLikes(likes + 1)
    setActive("like")
  }
  else{
    setLikes(likes + 1)
    setActive("like")
  }
}

const changeDislike = () => {
  if(active === "like"){
    setLikes(likes - 1)
    setDislikes(dislikes + 1)
    setActive("dislike")
  }
  else{
    setDislikes(dislikes + 1)
    setActive("dislike")
  }
}

  return (
    <div>
    <div className="likes-dislikes">
      <div>
      <button
        className="like-btn"
        style={{
          color: active === "like" ? "green" : "black",
        }}
        onClick={() => {
          if(active !== "like")
            changeLike()
        }
        }
      >
        <ArrowUpwardIcon/>
      </button>
      <div className="like-count">{likes}</div>
      </div>
      <div>
      <button
        className="dislike-btn"
        style={{ color: active === "dislike" ? "red" : "black" }}
        onClick={() =>{
          if(active !== "dislike")
            changeDislike()
        }
        }
      >
        <ArrowDownwardIcon/>
      </button>
      <div className="dislike-count">{dislikes}</div>
      </div>
    </div>
    </div>
  );
}