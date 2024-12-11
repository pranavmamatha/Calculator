function Equal(props: {
  calculation: string;
  setCalculation: (a: string) => void;
  finalSolution: string;
  setFinalSolution: (a: string) => void;
}) {
  function handleClick() {
    try {
      let cal = eval(props.calculation.replace(/÷/g, "/").replace(/×/g, "*"));
      if (cal == "Infinity") {
        props.setFinalSolution("Cannot divide by 0");
        return;
      }
      props.setFinalSolution(cal);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <button
      className="bg-[#AB4459] py-5 px-8 rounded-3xl border-black border-2 text-white  "
      onClick={handleClick}
    >
      =
    </button>
  );
}

export default Equal;
