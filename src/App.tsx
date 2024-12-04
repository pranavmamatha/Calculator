import React from "react";
import "./App.css";
import MainFunction from "./components/MainFunction";
import Functionality from "./components/Functionality";
import Numbers from "./components/Numbers";
import Equal from "./components/Equal";
import { useEffect, useState } from "react";

function App() {
  const [calculation, setCalculation] = useState("0");
  const [formatedCalculation, setFormatedCalculation] = useState("");
  const [finalSolution, setFinalSolution] = useState("here");
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
    <div className="h-screen flex items-center justify-center">
      <div className="bg-amber-700 text-white p-56 rounded-2xl">
        <div className="border-solid border-2 rounded-2xl p-3">
          <div>{formatedCalculation}</div>
          <div>Solution: {finalSolution}</div>
        </div>
        <div>
          <div>
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
          <div>
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
        <div>
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
  );
}

export default App;
