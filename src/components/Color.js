import React from 'react';

const Color = (props) => (
  <div>
    <label>Color</label>
    <input 
      type="color"
      onChange={e => props.onChange(e.target.value)}
    />
  </div>
)

export default Color;