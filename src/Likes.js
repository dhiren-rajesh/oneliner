import {React, useState} from 'react'

export default function Likes() {

const [likes, setLikes] = useState(0);
const [dislikes, setDislikes] = useState(0);
const [active, setActive] = useState(null);

const changeDislike = () => {
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

const changeLike = () => {
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
    <div className="likes-dislikes">
      <button
        style={{
          color: active === "like" ? "green" : "black",
          marginRight: "10px"
        }}
        onClick={() => {
          if(active !== "like")
            changeDislike()
        }
        }
      >
        <label>Likes</label>
        &nbsp;|&nbsp;
        {likes}
      </button>
      <button
        style={{ color: active === "dislike" ? "red" : "black" }}
        onClick={() =>{
          if(active !== "dislike")
            changeLike()
        }
        }
      >
        <label>Dislikes</label>
        &nbsp;|&nbsp;
        {dislikes}
      </button>
    </div>
  );
}