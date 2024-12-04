import React from "react";

export default function Numbers(props: {
  num: string;
  setFinalSolution: (a: string) => void;
  calculation: string;
  setCalculation: (a: string) => void;
}) {
  function allow(): boolean {
    props.setFinalSolution("here");
    if (props.calculation == "0") {
      props.setCalculation(props.num);
      return false;
    }
    return true;
  }

  function handleClick(): void {
    if (allow()) {
      const finalCalculation: string = props.calculation + props.num;
      props.setCalculation(finalCalculation);
    }
  }
  return <button onClick={handleClick}>{props.num}</button>;
}
