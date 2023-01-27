import React from "react";
import { TipResult } from "./TipResult";

export const ResultBoard = ({ tipValue, totalValue, handleReset }) => {
  return (
    <div className="py-3 px-4 rounded-4 bg-dark-cyan d-flex flex-column h-100">
        <TipResult text={"Tip Amount"} value={tipValue} key={0} />
        <TipResult text={"Total"} value={totalValue} key={1} />
      <div className="px-2 mt-auto">
        <button onClick={handleReset} className="fs-4 btn btn-success w-100">RESET</button>
      </div>
    </div>
  );
};
