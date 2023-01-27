import React from "react";
import { TipResult } from "./TipResult";
import { TipButton } from "./TipButton";
export const ResultBoard = () => {
  return (
    <div className="py-3 px-4 rounded-4 bg-dark-cyan d-flex flex-column h-100">
        <TipResult text={"Tip Amount"} value={45} key={0} />
        <TipResult text={"Total"} value={145} key={1} />
      <div className="px-2 mt-auto">
        <button className="fs-4 btn btn-success w-100">RESET</button>
      </div>
    </div>
  );
};
