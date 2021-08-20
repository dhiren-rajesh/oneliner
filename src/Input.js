
import React, { useState } from 'react';
import './Input.css'

export default function InputField({post}) {
  const [state, setState] = useState('')
  return (
    <div>
      <input type="text" 
      placeholder = "What's on your mind?"
      maxlength="50"
      className="text-inp"
      value={state} 
      name={post}
      onChange={(e) => setState(e.target.value)} />
    </div>
  );

}
