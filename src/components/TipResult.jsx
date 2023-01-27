import React from "react";

export const TipResult = ({ text, value }) => {
  return (
    <div className="row">
      <div className="col-6">
        <p className="text-white mb-0">{text}</p>
        <p className="text-2 mt-0">/ person</p>
      </div>
      <div className="col-6 text-end">
        <p className="text-3 fs-1">${value}</p>
      </div>
    </div>
  );
};
