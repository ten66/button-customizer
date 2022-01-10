import React from 'react';

const Background = (props) => (
  <div>
    <label>BackgroundColor</label>
    <input 
      type="color"
      onChange={e => props.onChange(e.target.value)}
    />
  </div>
);

export default Background;