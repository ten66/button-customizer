import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [styles, setStyles] = useState({
    color: "black",
    backgroundColor: "white",
    opacity: "1.0",
    borderRadius: "50%",
    fontSize: "30px",
  });
  const [disabled, setDisabled] = useState(false);
  const [text, setText] = useState("custom button");

  const handleColorChange = (e) => {
    setStyles({...styles, color: e.target.value});
  }

  const handleBGColorChange = (e) => {
    setStyles({...styles, backgroundColor: e.target.value});
  }

  const handleOpacityChange = (e) => {
    setStyles({...styles, opacity: e.target.value});
  }

  const handleBRChange = (e) => {
    setStyles({...styles, borderRadius: e.target.value + "%"});
  }

  const handleFSChange = (e) => {
    setStyles({...styles, fontSize: e.target.value + "px"});
  }

  const handleDisabledChange = (e) => {
    setDisabled(() => e.target.checked);
  }

  const handleTextChange = (e) => {
    setText(() => e.target.value);
  }

  return (
    <div>
      <div>
        <input 
          type="button"
          style={styles}
          disabled={disabled}
          value={text}
        />
      </div>

      <div>
        <label>color</label>
        <input type="color" onChange={handleColorChange} />
      </div>

      <div>
        <label>backgroundColor</label>
        <input type="color" onChange={handleBGColorChange} />
      </div>

      <div>
        <label>opacity</label>
        <input type="range" min="0" max="1" step="0.1" onChange={handleOpacityChange} />
      </div>

      <div>
        <label>borderRadius</label>
        <input type="range" min="0" max="100" step="1" onChange={handleBRChange} />
      </div>

      <div>
        <label>fontSize</label>
        <input type="range" min="10" max="40" step="1" onChange={handleFSChange} />
      </div>

      <div>
        <label>disabled</label>
        <input type="checkbox" onChange={handleDisabledChange} />
      </div>

      <div>
        <label>button text</label>
        <input type="text" value={text} onChange={handleTextChange} />
      </div>
    </div>

  );
}
 
ReactDOM.render(
  <App />,
  document.getElementById("root"),
);