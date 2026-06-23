import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increase = () => setCount(count + step);
  const decrease = () => setCount(count - step >= 0 ? count - step : 0);
  const reset = () => setCount(0);

  return (
    <div className="container">
      <h1>Counter Application</h1>
      <h2>Counter Value: {count}</h2>

      <label>Step Value: </label>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />

      <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset} className="reset">Reset</button>
      </div>
    </div>
  );
};

export default App;
