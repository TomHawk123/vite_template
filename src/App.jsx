import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./Components/Button";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button text="Click Here" id="vite" />
        <Button text="Click Here" id="gpt1" />
        <Button text="Click Here" id="primary" />
        <Button text="Click Here" id="secondary" />
        <Button text="Success" id="success" />
        <Button text="Danger" id="danger" />
        <Button text="Gradient Glow" id="gradient-glow" />
        <Button text="3D Press" id="three-d-press" />
        <Button text="Shimmering" id="amazing-button" />
        <Button text="The Twist" id="twist" />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
