import { useState } from "react";
import "./style.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <CounterV2 />
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

function CounterV2() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleStepChange(e) {
    setStep(+e.target.value);
  }

  function handleCountChange(e) {
    setCount(+e.target.value);
  }

  function handleCountPlus() {
    setCount((c) => count + step);
  }

  function handleCountMinus() {
    setCount((c) => count - step);
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="CounterV2">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={handleStepChange}
        />
        <span>Step:{step}</span>
      </div>
      <div>
        <button onClick={handleCountMinus}>-</button>
        <input type="text" value={count} onChange={handleCountChange} />
        <button onClick={handleCountPlus}>+</button>
      </div>
      <div>
        {count == 0 ? (
          <p>
            Today is <span>{date.toDateString()}</span>
          </p>
        ) : (
          <p>
            {count} days from today is {date.toDateString()}
          </p>
        )}
      </div>
      <div>
        <button onClick={handleReset}>reset</button>
      </div>
    </div>
  );
}
