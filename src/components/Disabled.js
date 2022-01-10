import React from "react";

const Disabled = (props) => (
  <div>
    <label>Disabled </label>
    <input 
      type="checkbox"
      onChange={e => props.onChange(e.target.checked)}
    />
  </div>
)

export default Disabled;