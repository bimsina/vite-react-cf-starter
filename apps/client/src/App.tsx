import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:8787/")
      .then((res) => res.text())
      .then((data) => {
        setMessage(data);
      });
  }, []);

  return (
    <div>
      <h1>Vite + React + CF Workers</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>

      <h3>The response from CF worker is : {message}</h3>
    </div>
  );
}

export default App;
