import React, { useState } from "react";
import { InputBill } from "./InputBill";
import { TipList } from "./TipList";
import { ResultBoard } from "./ResultBoard";

const blankState = {
  tipValue: 0,
  totalValue: 0,
  billValue: 0,
  totalPersons: 0,
  tipPercent: 5
};

export const Calculator = () => {
  const [values, setValues] = useState(blankState);
  const [isValid, setIsValid] = useState(null);

  const handleValueChange = (newValue, prop) => {
    setValues({
      ...values,
      [prop]: newValue
    })
  }

  const handleReset = () => {
    setValues(blankState);
  }

  return (
    <div className="d-flex col-12 col-md-10 flex-column flex-md-row container-fluid border rounded-5 h-80 bg-white align-items-center">
      <div className="col-12 col-md-6 half">
        <InputBill
          text={"Bill"}
          icon={"icon-dollar"}
          limit={999999999999}
          key={0}
          value={values.billValue}
          handler={handleValueChange}
          isValid={isValid}
        />
        <TipList key={1} handler={handleValueChange}/>
        <InputBill
          text={"Number of People"}
          icon={"icon-person"}
          limit={999}
          key={2}
          value={values.totalPersons}
          handler={handleValueChange}
          isValid={isValid}
        />
      </div>
      <div className="col-12 col-md-6 half p-3">
        <ResultBoard tipValue={values.tipValue} totalValue={values.totalValue} handleReset={handleReset} isValid={isValid}/>
      </div>
    </div>
  );
};
