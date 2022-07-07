import React from "react";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Button has been clicked {count} times</h1>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Click me!</button>
    </>
  );
}