import React from 'react';

const Text = (props) => (
  <div>
    <label>Button Text </label>
    <input 
      type="text"
      value={props.value}
      onChange={e => props.onChange(e.target.value)}
    />
  </div>
);

export default Text;