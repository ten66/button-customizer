import React from 'react';

const FontSize = (props) => {
  const range = props.range;
  return (
    <div>
      <label>FontSize </label>
      <input 
        type="range"
        min={range.min}
        max={range.max}
        step={range.step}
        onChange={e => props.onChange(e.target.value)}
      />
    </div>
  )
}

export default FontSize;