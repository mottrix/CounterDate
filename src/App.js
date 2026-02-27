import { useState } from "react";
import "./styles.css";

export default function App() {
  let date = new Date("February 24 2026");
  const [count, setCounter] = useState(0);
  const [step, setStep] = useState(0);
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div className="step btn">
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <p>Step : {step}</p>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className="count btn">
        <button onClick={() => setCounter((c) => c - step)}>-</button>
        <p>Count: {count}</p>
        <button onClick={() => setCounter((c) => c + step)}>+</button>
      </div>
      <div className="message">
        <p>Today is {date.toDateString()}</p>
      </div>
    </div>
  );
}
function counterPlus() {}
function counterMinus() {}
