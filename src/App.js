import React, { useState } from 'react';

import { opacityRange, borderRadiusRange, fontSizeRange } from "./data";

import Color from './components/Color';
import Background from './components/Background';
import Opacity from './components/Opacity';
import BorderRadius from './components/BorderRadius';
import FontSize from './components/FontSize';
import Disabled from './components/Disabled';
import Text from './components/Text';

const App = () => {
  const [styles, setStyles] = useState({
    color: "black",
    background: "white",
    opacity: "1.0",
    borderRadius: "50%",
    fontSize: "30px",
  });
  const [disabled, setDisabled] = useState(false);
  const [text, setText] = useState("custom button");

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

      <Color onChange={value => setStyles({...styles, color: value})} />
      <Background onChange={value => setStyles({...styles, background: value})} />
      <Opacity 
        range={opacityRange}
        onChange={value => setStyles({...styles, opacity: value})}
      />
      <BorderRadius 
        range={borderRadiusRange}
        onChange={value => setStyles({...styles, borderRadius: value+"%"})}
      />
      <FontSize 
        range={fontSizeRange}
        onChange={value => setStyles({...styles, fontSize: value+"px"})}
      />
      <Disabled 
        onChange={value => setDisabled(value)}
      />
      <Text
        value={text}
        onChange={value => setText(value)}
      />
    </div>
  );
}

export default App;