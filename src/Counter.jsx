import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="Counter">
      <h1>Counter vole</h1>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <div>{count}</div>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
    </div>
  );
}
