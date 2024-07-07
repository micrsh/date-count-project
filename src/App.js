import { useState } from "react";
import "./style.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function stepPlus() {
    setStep((s) => s + 1);
  }

  function stepMinus() {
    setStep((s) => s - 1);
  }

  function countPlus() {
    setCount((c) => c + step);
  }

  function countMinus() {
    setCount((c) => c - step);
  }

  return (
    <div>
      <div className="p">
        <button onClick={stepMinus}>-</button>
        <p>Step:{step}</p>
        <button onClick={stepPlus}>+</button>
      </div>
      <div className="p">
        <button onClick={countMinus}>-</button>
        <p>Count:{count}</p>
        <button onClick={countPlus}>+</button>
      </div>
      {count !== 0 ? (
        <p>
          {count} days from today is <span>{date.toDateString()}</span>
        </p>
      ) : (
        <p>
          Today is <span>{date.toDateString()}</span>
        </p>
      )}
    </div>
  );
}
