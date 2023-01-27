import React from "react";
import { InputBill } from "./InputBill";
import { TipList } from "./TipList";
import { ResultBoard } from "./ResultBoard";

export const Calculator = () => {
  return (
    <div className="d-flex col-12 col-md-10 flex-column flex-md-row container-fluid border rounded-5 h-80 bg-white align-items-center">
      <div className="col-12 col-md-6 half">
        <InputBill
          text={"Bill"}
          icon={"icon-dollar"}
          limit={999999999999}
          key={0}
        />
        <TipList key={1} />
        <InputBill
          text={"Number of People"}
          icon={"icon-person"}
          limit={999}
          key={2}
        />
      </div>
      <div className="col-12 col-md-6 half p-3">
        <ResultBoard />
      </div>
    </div>
  );
};
