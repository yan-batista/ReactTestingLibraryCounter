import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((count) => count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <div className="card">
        <p data-testid="counter_value">{count}</p>
        <button data-testid="increase" onClick={increase}>
          +
        </button>
        <button data-testid="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
