import { useState } from "react";
import "./App.css";

export default function App() {
  const [counter, setCounter] = useState(0);

  const [steps, setSteps] = useState(1);
  const date = new Date().toDateString();

  const dadd = new Date();

  dadd.setDate(dadd.getDate() + counter);

  function handleNext() {
    setSteps(steps + 1);
  }
  function handlePrevious() {
    setSteps(steps - 1);
  }
  function handleNextCounter() {
    setCounter(counter + steps);
  }
  function handlePreviousCounter() {
    setCounter(counter - steps);
  }

  return (
    <>
      <div className="ale">
        <div className="buttonOne">
          <button onClick={handlePrevious}>-</button>
          <p>step: {steps} </p>
          <button onClick={handleNext}>+</button>
        </div>
        <div className="buttonTwo">
          <button onClick={handlePreviousCounter}>-</button>
          <p>Count: {counter}</p>

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
      </div>
    </>
  );
}
