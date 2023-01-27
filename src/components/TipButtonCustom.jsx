import React from "react";

export const TipButtonCustom = ({handler}) => {

  const handleChange = (ev) => {
   handler(ev.target.value,'tipPercent');
  }
  return (
    <div className="col-6 py-2 px-2 justify-content-center">
      <input
      onChange={handleChange}
      placeholder="Custom"
      type='number'

        spellCheck={false}
        className= "fs-4 btn col-12 btn-secondary text-end"
      >
      </input>
    </div>
  );
};
