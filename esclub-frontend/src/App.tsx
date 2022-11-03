import * as React from "react";
import { Routes, Route, } from "react-router-dom";
import "./App.css";
import Clubs from "./Components/Clubs";
import Events from "./Components/Events";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="clubs" element={<Clubs />} />
        <Route path="events" element={<Events />} />
      </Routes>
    </div>
  );
}
export default App;