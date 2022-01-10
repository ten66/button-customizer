import React from 'react';

const BorderRadius = (props) => {
  const range = props.range;
  return (
    <div>
      <label>BorderRadius </label>
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

export default BorderRadius;