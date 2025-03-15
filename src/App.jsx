import { useState } from "react";
import "./App.css";

export default function App() {
  const [counter, setCounter] = useState(0);

  const [steps, setSteps] = useState(1);
  const date = new Date().toDateString();

  const dadd = new Date();

  dadd.setDate(dadd.getDate() + counter);
  function handleNextCounter() {
    setCounter(counter + steps);
  }
  function handlePreviousCounter() {
    setCounter(counter - steps);
  }
  function handleClick() {
    setSteps(1);
    setCounter(0);
  }
  return ( 
    <>
      <div className="ale">
        <div className="buttonOne">
          <input
            type="range"
            min={0}
            max={10}
            value={steps}
            onChange={(e) => setSteps(Number(e.target.value))}
          />

          <p>step: {steps} </p>
        </div>
        <div className="buttonTwo">
          <button onClick={handlePreviousCounter}>-</button>
          <input
            type="text"
            value={counter}
            onChange={(e) => setCounter(Number(e.target.value))}
          />
          <button onClick={handleNextCounter}>+</button>
        </div>
        {counter > 0 ? (
          <p>
            {" "}
            {counter} day from Today is {dadd.toDateString()}{" "}
          </p>
        ) : counter == 0 ? (
          <p>Today is {date}</p>
        ) : (
          <p>
            {Math.abs(counter)} day ago was {dadd.toDateString()}{" "}
          </p>
        )}
        {counter !== 0 || steps !== 1 ? (
          <div>
            <button onClick={handleClick}>Reset</button>
          </div>
        ) : null}
      </div>
    </>
  );
}
