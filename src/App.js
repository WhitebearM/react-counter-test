import { useState } from "react";


function App() {

  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);


  return (
    <div>
      <header>
        <h3 data-testid='counter'>{counter}</h3>
      </header>

      <button data-testid='minus-button' onClick={() => setCounter((count) => count - 1) }disabled={disabled}>-</button>
      <button data-testid='plus-button' onClick={() => setCounter((count) => count + 1)} disabled={disabled}>+</button>

      <div>
        <button onClick={() => setDisabled((prev) => !prev )}>On / Off</button>
      </div>
    </div>
  );
}

export default App;
