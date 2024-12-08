import React from "react";

function MainFunction(props: {
  funcName: string;
  calculation: string;
  setCalculation: (a: string) => void;
}) {
  function handleClick(): void {
    if (props.funcName == "AC") {
      props.setCalculation("0");
    }
    if (props.funcName == "⌫" && props.calculation != "0") {
      let x: string = props.calculation.slice(0, -1);
      props.setCalculation(x);
    }
  }

  return (
    <button
      className="bg-[#AB4459] py-5 px-6 rounded-3xl border-black border-2 text-white"
      onClick={handleClick}
    >
      {props.funcName}
    </button>
  );
}

export default MainFunction;
