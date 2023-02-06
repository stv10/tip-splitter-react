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
  /* Variables de entorno */
  const [values, setValues] = useState(blankState);
  const [isValid, setIsValid] = useState(null);


  /* Método que se ejecuta para hacer el calculo cuando se presiona ENTER */
  const splitTip = () => {
    if (values.totalPersons <= 0) {
      setIsValid(false);
      return;
    }

    let tipAmount = values.tipPercent * values.billValue / 100;
    let tipPerPerson = tipAmount / values.totalPersons;
    let billPerPerson = (values.billValue / values.totalPersons) + tipPerPerson;

    setValues({
      ...values,
      tipValue: tipPerPerson,
      totalValue: billPerPerson
    })
  }

  /* Handler para el cambio en el estado de todos los campos */
  const handleValueChange = (newValue, prop) => {
    if (values.totalPersons > 0) {
      setIsValid(true);
    }
    setValues({
      ...values,
      [prop]: newValue
    })
  }


  const handleReset = () => {
    setValues(blankState);
  }


  document.addEventListener('keypress', (ev) => {
    if (ev.key === "Enter") {
      ev.preventDefault();
      splitTip();
    }
  })

  window.onload = () => {
    document.getElementById('btn5').classList += ' active'
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
        <TipList key={1} handler={handleValueChange} />
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
        <ResultBoard tipValue={values.tipValue} totalValue={values.totalValue} handleReset={handleReset} isValid={isValid} />
      </div>
    </div>
  );
};
