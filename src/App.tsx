import "./App.css";
import MainFunction from "./components/MainFunction";
import Functionality from "./components/Functionality";
import Numbers from "./components/Numbers";
import Equal from "./components/Equal";
import { useEffect, useState } from "react";

function App() {
  const [calculation, setCalculation] = useState("0");
  const [formatedCalculation, setFormatedCalculation] = useState("");
  const [finalSolution, setFinalSolution] = useState("Answer");
  const nums: string[] = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];

  const func1: string[] = ["÷", "×", "-", "+"];
  const func2: string[] = ["AC", "⌫"];

  useEffect(() => {
    let formating: string = "";
    for (let i = 0; i < calculation.length; i++) {
      if (func1.includes(calculation[i])) {
        formating += ` ${calculation[i]} `;
        continue;
      }
      formating += calculation[i];
    }
    setFormatedCalculation(formating);
  }, [calculation]);

  return (
    <div className="bg-[#E4F1AC] p-10 rounded-3xl">
      <div className="">
        <div className="flex flex-col">
          <input
            value={formatedCalculation}
            className="bg-[#A7D477] p-5 w-94 text-[#355F2E]	text-2xl	rounded-3xl"
          />
          <input
            className="bg-[#8EB486] p-5 w-94 text-[#ffffff]	text-2xl	rounded-3xl mt-3"
            value={finalSolution}
          />
        </div>
        <div className="flex flex-row ">
          <div>
            <div className="mt-3 space-x-2 ">
              {func2.map((e) => {
                return (
                  <MainFunction
                    key={func2.indexOf(e)}
                    funcName={e}
                    calculation={calculation}
                    setCalculation={setCalculation}
                  />
                );
              })}
            </div>
            <div className="grid grid-cols-3 gap-3 mt-3 ">
              {nums.map((e) => {
                return (
                  <Numbers
                    setFinalSolution={setFinalSolution}
                    key={nums.indexOf(e)}
                    calculation={calculation}
                    setCalculation={setCalculation}
                    num={e}
                  />
                );
              })}
              <Functionality
                key={12}
                funcName={"."}
                calculation={calculation}
                setCalculation={setCalculation}
              />
            </div>
          </div>
          <div className="flex flex-col ml-3 mt-3 space-y-3">
            {func1.map((e) => {
              return (
                <Functionality
                  key={func1.indexOf(e)}
                  funcName={e}
                  calculation={calculation}
                  setCalculation={setCalculation}
                />
              );
            })}
            <Equal
              finalSolution={finalSolution}
              setFinalSolution={setFinalSolution}
              calculation={calculation}
              setCalculation={setCalculation}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
