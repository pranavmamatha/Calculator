export default function Functionality(props: {
  funcName: string;
  calculation: string;
  setCalculation: (a: string) => void;
}) {
  function lastLetter(): string {
    return props.calculation[props.calculation.length - 1];
  }

  function allow(key: string): boolean {
    const cal: string = props.calculation;

    if (cal.length == 1 && cal[0] == "0") {
      if (key == "-") {
        props.setCalculation("-");
        return false;
      }
      if (key == ".") {
        props.setCalculation(props.calculation + ".");
        return false;
      }
    }

    if (key == ".") {
      let TorD: boolean = false;
      for (let i = props.calculation.length; i >= 0; i--) {
        if (props.calculation[i] == ".") {
          TorD = true;
        }
        if (["+", "-", "x", "÷"].indexOf(props.calculation[i]) != -1) {
          console.log(["+", "-", "x", "÷", "."].indexOf(props.calculation[i]));
          if (!TorD) {
            return true;
          }
        }
      }
      return false;
    }
    if (["+", "-", "x", "÷", "."].indexOf(lastLetter()) == -1) {
      return true;
    }

    return false;
  }

  function handleClick(): void {
    if (allow(props.funcName)) {
      const finalCalculation: string = props.calculation + props.funcName;
      props.setCalculation(finalCalculation);
    }
  }

  return <button onClick={handleClick}>{props.funcName}</button>;
}
