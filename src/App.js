import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
import { OnePage } from "./pages/OnePage";
import { TwoPage } from "./pages/TwoPage";
import { useState } from "react";
import { CounterContext } from "./pages/components/CounterContext";

function App() {
  let initialCount = 0;
  const [value, setValue] = useState(initialCount);

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Page One</Link>
          </li>
          <li>
            <Link to="page-two">Page Two</Link>
          </li>
        </ul>
      </nav>
      <CounterContext.Provider value={{ value, setValue }}>
        <Routes>
          <Route path="/" element={<OnePage />} />
          <Route path="/Page-two" element={<TwoPage />} />
        </Routes>
      </CounterContext.Provider>
    </div>
  );
}

export default App;
