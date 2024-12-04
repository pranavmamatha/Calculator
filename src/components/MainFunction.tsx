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

  return <button onClick={handleClick}>{props.funcName}</button>;
}

export default MainFunction;
