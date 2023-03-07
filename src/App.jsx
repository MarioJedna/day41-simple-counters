import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="Counters">
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
