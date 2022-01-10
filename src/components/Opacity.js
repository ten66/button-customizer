import React from 'react';

const Opacity = (props) => (
  <div>
    <label>Opacity</label>
    <input 
      type="range"
      min={props.range.min}
      max={props.range.max}
      step={props.range.step}
      onChange={e => props.onChange(e.target.value)}
    />
  </div>
);

export default Opacity;