import { useState } from 'react';
import "./app.css"

export default function MyInput() {
  const [text, setText] = useState('hello');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div style={{backgroundColor:"WindowFrame"}} className='main'>
      <input style={{backgroundColor:"cadetblue", border:"2px solid yellow"}} className='main' value={text} onChange={handleChange} />
      <p style={{color:"royalblue", backgroundColor:"cornsilk", border:"2px solid green"}} className='main'>You typed: {text}</p>
      <button style={{fontWeight:"bold", width:"150px", backgroundColor:"ThreeDDarkShadow", color:"coral", border:"2px solid"}} className='main' onClick={() => setText('hello')}>
        Reset
      </button>
    </div>
  );
}
